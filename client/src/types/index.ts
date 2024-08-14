export interface TableData {
  articleid: number;
  subarticleid: number;
  articlename: string;
  external_str_id: string;
  ecrlongname: string;
}
export interface TableDataFromApi {
  data: TableData[];
  total: number;
}
