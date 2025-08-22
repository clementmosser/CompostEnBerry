export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      actualites: {
        Row: {
          cover_photo: string | null
          created_at: string
          id: number
          photo_bucket: string | null
          text_content: string[]
          title: string
        }
        Insert: {
          cover_photo?: string | null
          created_at?: string
          id?: number
          photo_bucket?: string | null
          text_content: string[]
          title: string
        }
        Update: {
          cover_photo?: string | null
          created_at?: string
          id?: number
          photo_bucket?: string | null
          text_content?: string[]
          title?: string
        }
        Relationships: []
      }
      adhesion_goals: {
        Row: {
          id: number
          text: string[] | null
          title: string | null
        }
        Insert: {
          id?: number
          text?: string[] | null
          title?: string | null
        }
        Update: {
          id?: number
          text?: string[] | null
          title?: string | null
        }
        Relationships: []
      }
      adhesion_presentation: {
        Row: {
          id: number
          text: string[] | null
        }
        Insert: {
          id?: number
          text?: string[] | null
        }
        Update: {
          id?: number
          text?: string[] | null
        }
        Relationships: []
      }
      clients: {
        Row: {
          backGroundColorClass: string | null
          created_at: string
          id: number
          img_url: string | null
          name: string
          sentences: string[]
        }
        Insert: {
          backGroundColorClass?: string | null
          created_at?: string
          id?: number
          img_url?: string | null
          name: string
          sentences: string[]
        }
        Update: {
          backGroundColorClass?: string | null
          created_at?: string
          id?: number
          img_url?: string | null
          name?: string
          sentences?: string[]
        }
        Relationships: []
      }
      contact: {
        Row: {
          adress: string | null
          country: string | null
          id: number
          mail: string | null
          name: string | null
          tel: string | null
        }
        Insert: {
          adress?: string | null
          country?: string | null
          id?: number
          mail?: string | null
          name?: string | null
          tel?: string | null
        }
        Update: {
          adress?: string | null
          country?: string | null
          id?: number
          mail?: string | null
          name?: string | null
          tel?: string | null
        }
        Relationships: []
      }
      legal_mentions: {
        Row: {
          content: string[] | null
          created_at: string
          id: number
          title: string | null
        }
        Insert: {
          content?: string[] | null
          created_at?: string
          id?: number
          title?: string | null
        }
        Update: {
          content?: string[] | null
          created_at?: string
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      partenaires: {
        Row: {
          created_at: string
          id: number
          name: string
          src: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          src: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          src?: string
        }
        Relationships: []
      }
      titles: {
        Row: {
          component_name: string | null
          id: number
          title_normal: string | null
          title_wrap: string | null
        }
        Insert: {
          component_name?: string | null
          id?: number
          title_normal?: string | null
          title_wrap?: string | null
        }
        Update: {
          component_name?: string | null
          id?: number
          title_normal?: string | null
          title_wrap?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
