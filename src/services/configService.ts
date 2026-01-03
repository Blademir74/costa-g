import { createClient } from '@/utils/supabase/server';

export interface SiteConfig {
  title?: string;
  subtitle?: string;
  bg_image?: string;
  cta_primary?: string;
  cta_secondary?: string;
  // Nuevos campos sociales
  facebook_url?: string;
  instagram_url?: string;
  linkedin_url?: string;
  whatsapp_number?: string;
  // Stats
  stats?: any[];
}

// SOLO LECTURA (Server-Side)
export const getSiteConfig = async (key: string): Promise<SiteConfig | null> => {
  const supabase = createClient();
  try {
    const { data, error } = await supabase
      .from('site_config')
      .select('content')
      .eq('section_key', key)
      .single();
      
    if (error) return null;
    return data?.content as SiteConfig;
  } catch (e) {
    return null;
  }
};