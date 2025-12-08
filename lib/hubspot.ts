// HubSpot Private App Access Token
// In production, always use process.env.HUBSPOT_ACCESS_TOKEN
const HUBSPOT_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN || 'fbeb7365-bdd8-4ba0-98ac-f7f157a64001';

interface HubSpotContactProps {
  email: string;
  name: string;
  phone: string;
  projectInterest?: string;
  budget?: string;
  location?: string;
  clientType?: string;
  message?: string;
}

export async function createHubSpotContact(data: HubSpotContactProps) {
  try {
    // 1. Map Frontend/DB values to HubSpot Custom Properties
    const names = data.name.split(' ');
    const firstname = names[0];
    const lastname = names.slice(1).join(' ');

    // Map Service Type to 'proyecto_interes' options (Construcción, Remodelación, Diseño, Desarrollos)
    const mapProjectInterest = (type?: string) => {
      const map: Record<string, string> = {
        'obra_publica': 'Construcción',
        'construccion': 'Construcción',
        'desarrollo': 'Desarrollos',
        'maquinaria': 'Construcción',
        'remodelacion': 'Remodelación',
        'diseno': 'Diseño'
      };
      return type ? map[type] || 'Construcción' : 'Construcción';
    };

    // Map Budget to 'presupuesto' (Number)
    // Assuming the frontend sends ranges, we estimate an average or min value for the numeric field
    const mapBudget = (range?: string) => {
      const map: Record<string, number> = {
        'low': 500000,
        'mid': 3000000,
        'high': 10000000,
        'institutional': 20000000
      };
      return range ? map[range] || 0 : 0;
    };

    const properties = {
      email: data.email,
      firstname: firstname,
      lastname: lastname,
      phone: data.phone,
      // Standard HubSpot fields
      lifecyclestage: 'lead',
      lead_status: 'NEW', 
      
      // Custom Properties defined in Prompt 3.3
      proyecto_interes: mapProjectInterest(data.projectInterest),
      presupuesto: mapBudget(data.budget),
      ubicacion_preferida: data.location || 'No especificada',
      contacto_tipo: data.clientType || 'Individual', // Default to Individual
      
      // Store the raw message in a custom note field or generic description if available
      // Note: 'message' is often not a default contact property, using 'description' or custom if created.
      description: data.message
    };

    // 2. Send Request to HubSpot CRM API (v3)
    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HUBSPOT_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ properties })
    });

    if (!response.ok) {
      const errorData = await response.json();
      // Handle "Contact already exists" (409) gracefully if needed
      if (response.status === 409) {
        console.log('HubSpot: Contact already exists. Skipping creation.');
        return { success: true, status: 'exists' };
      }
      console.error('HubSpot API Error:', JSON.stringify(errorData, null, 2));
      return { success: false, error: errorData };
    }

    const result = await response.json();
    return { success: true, data: result };

  } catch (error) {
    console.error('HubSpot Integration Error:', error);
    return { success: false, error };
  }
}