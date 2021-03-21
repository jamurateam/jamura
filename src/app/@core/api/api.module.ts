import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiConfig } from './api.type';
import { API_CONFIG } from './api.constant';
import { ApiService } from './api.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class ApiModule {
  static forRoot(config: ApiConfig): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [{ provide: API_CONFIG, useValue: config }, ApiService],
    };
  }
}
