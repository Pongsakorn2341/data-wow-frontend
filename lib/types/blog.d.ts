export type ICreateBlog = {
  title: string;
  category: string;
  detail: string;
};

export type ICreator = {
  id: string;
  username: string;
  profile_image: string | null;
  role: "USER" | "ADMIN" | "SUPERADMIN";
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type IBlog = {
  id: string;
  title: string;
  detail: string;
  category: string;
  created_by: string;
  created_at: string;
  updated_at: string;
  User: ICreator;
  _count: {
    Comment: number;
  };
};

export type IComment = {
  id: string;
  blog_id: string;
  detail: string;
  created_by: string;
};
