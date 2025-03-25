export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
