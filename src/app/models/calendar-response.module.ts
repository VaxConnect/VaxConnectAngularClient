// Generated by https://quicktype.io

export interface CalendarResponse {
  id: string;
  fullname: string;
  age: string;
  allVaccine: VaccineOnCalendar[];
}

export interface VaccineOnCalendar {
  id: string;
  nameVacune: string;
  getMomentToImplementVacuneDTOS: GetMomentToImplementVacuneDTO[];
}

export interface GetMomentToImplementVacuneDTO {
  id: string;
  monthToImplement: number;
  typeDosis: string;
  isImplemented: boolean;
}
