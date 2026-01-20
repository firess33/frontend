import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));







// /////////////copy json and paste to 1 ts   shift ctrl alt v   then>> 要+export才能export to other js 啥鬼的 使用interface
// interface RootObject {
//   success: string;
//   result: Result;
//   records: Records;
// }

// interface Records {
//   Locations: Location2[];
// }

// interface Location2 {
//   DatasetDescription: string;
//   LocationsName: string;
//   Dataid: string;
//   Location: Location[];
// }

// interface Location {
//   LocationName: string;
//   Geocode: string;
//   Latitude: string;
//   Longitude: string;
//   WeatherElement: WeatherElement[];
// }

// interface WeatherElement {
//   ElementName: string;
//   Time: Time[];
// }

// interface Time {
//   DataTime?: string;
//   ElementValue: ElementValue[];
//   StartTime?: string;
//   EndTime?: string;
// }

// interface ElementValue {
//   Temperature?: string;
//   DewPoint?: string;
//   RelativeHumidity?: string;
//   ApparentTemperature?: string;
//   ComfortIndex?: string;
//   ComfortIndexDescription?: string;
//   WindSpeed?: string;
//   BeaufortScale?: string;
//   WindDirection?: string;
//   ProbabilityOfPrecipitation?: string;
//   Weather?: string;
//   WeatherCode?: string;
//   WeatherDescription?: string;
// }

// interface Result {
//   resource_id: string;
//   fields: Field[];
// }

// interface Field {
//   id: string;
//   type: string;
// }
