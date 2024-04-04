import { ServiceBase } from '../base/ServiceBase';
import { BookingModel } from '../models/request/BookingModel';
import { PartialBookingModel } from '../models/request/PartialBookingModel';
import { BookingResponse } from '../models/responses/BookingResponse';
export class BookingService extends ServiceBase {
  constructor() {
    super('/booking');
  }
  async getBookingIds<T>(
    params: URLSearchParams = new URLSearchParams(),
    config = this.defaultConfig,
  ): Promise<T> {
    config.params = params;
    return await this.get<T>(this.url, config);
  }
  async getBooking<T>(id: unknown, config = this.defaultConfig): Promise<T> {
    return await this.get<T>(`${this.url}/${id}`, config);
  }
  async addBooking<T>(
    booking: BookingModel,
    config = this.defaultConfig,
  ): Promise<T> {
    return await this.post(this.url, booking, config);
  }
  async updateBooking<T>(
    id: unknown,
    booking: BookingModel,
    config = this.defaultConfig,
  ): Promise<T> {
    return await this.put(`${this.url}/${id}`, booking, config);
  }
  async partialUpdateBooking<T>(
    id: unknown,
    booking: PartialBookingModel,
    config = this.defaultConfig,
  ): Promise<T> {
    return await this.patch(`${this.url}/${id}`, booking, config);
  }
  async deleteBooking<T>(id: unknown, config = this.defaultConfig): Promise<T> {
    return await this.delete(`${this.url}/${id}`, config);
  }
}
