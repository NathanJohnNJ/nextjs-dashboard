// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  image_url: string;
};

export type Chat = {
  id: string;
  user: string;
  date: string;
  status: 'ongoing' | 'historical';
  chat: string;
};


export type LatestMessage = {
  id: string;
  user_id: string;
  date: string;
  email: string;
  message: string;
};

export type ChatTable = {
  id: string;
  user_id: string;
  name: string;
  email: string;
  date: string;
  chat: string;
  status: 'ongoing' | 'historical';
};

export type UsersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_chats: number;
  total_messages: number;
};

export type FormattedUsersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_chats: number;
  total_messages: number;
};

export type UserField = {
  id: string;
  name: string;
};

export type ChatForm = {
  id: string;
  user_id: string;
  chat: string;
  status: 'pending' | 'paid';
};
