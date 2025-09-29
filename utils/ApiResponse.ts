export interface ApiResponse<T> {
  success: boolean;
  message: string;
  error?: string | any;
  data?: T;
  details?: Record<string, any>;
}
