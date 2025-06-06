
export abstract class Controller {
  /**
       * Envía una respuesta de éxito.
       * @param res - Objeto de respuesta de Express.
       * @param data - Datos a enviar en la respuesta.
       * @param message - Mensaje opcional.
       * @param statusCode - Código de estado HTTP (por defecto 200).
       */
  protected successResponse (res: any, data: any, message: string = 'Operación exitosa', statusCode: number = 200): void {
    res.status(statusCode).json({
      success: true,
      message,
      data
    })
  }

  /**
       * Envía una respuesta de error.
       * @param res - Objeto de respuesta de Express.
       * @param error - Error o mensaje de error.
       * @param statusCode - Código de estado HTTP (por defecto 500).
       */
  protected errorResponse (req: any, res: any, error: any, statusCode: number = 500): void {
    res.status(statusCode).json({
      success: false,
      message: error instanceof Error ? error.message : error
    })
  }
}

export interface UsersPreferencia {
  userId: number
  preferenciaId: number
  borrado?: boolean
}

export interface Publicacion {
  id: number
  userId: number
  contenido: string
  creadoEn?: Date
  borrado?: boolean
}

export interface ImagenPublicacion {
  id: number
  publicacionId: number
  url: string
  borrado?: boolean
}

export interface Bloqueo {
  id: number
  userId: number
  userBloqueadoId: number
  fechaBloqueado?: Date
  fechaDesbloqueado?: Date
  borrado?: boolean
}

export interface PeticionSeguimiento {
  id: number
  userOrigen: number
  userDestino: number
  estado: string
  creadoEn?: Date
  borrado?: boolean
}

export interface Conversacion {
  id: number
  user1Id: number
  user2Id: number
  creadoEn?: Date
  borrado?: boolean
}

export interface Mensaje {
  id: number
  conversacionId: number
  remitenteId: number
  contenido: string
  estado: string
  creadoEn?: Date
  borrado?: boolean
}

export interface RefreshToken {
  id: number
  userId: number
  token: string
  ipAccess?: string
  userAgent?: string
}

export interface Preferencia {
  id: number
  nombre: string
  borrado?: boolean
}

export interface Rama {
  id: number
  nombre: string
  borrado?: boolean
}

export interface Grado {
  id: number
  nombre: string
  borrado?: boolean
}

export interface Rol {
  id: number
  nombre: string
  borrado?: boolean
}

export interface Empresa {
  id: number
  nombre: string
  cif: string
  direccion: string
  sector: string
  telefono: string
  email: string
  creadoEn?: Date
  borrado?: boolean
}

declare module 'express-serve-static-core' {
  interface Request {
    user?: number
  }
}

export interface QueryPaginate {
  page: number
  limit: number
}

export interface PaginateOptions<T> {
  queryPaginate?: QueryPaginate
  getData: (skip: number, take: number) => Promise<T[]>
  getTotal: () => Promise<number>
}

export interface Pagination {
  currentPage: number
  totalPages: number
  totalItems: number
  limit: number
}
export interface PaginationResult<T> {
  data: T[]
  pagination: Pagination
}

export interface Error {
  message: string
  statusCode?: number
  stack?: string
}

export interface decodedToken {
  userId: number
  iat: number
  exp: number
}
