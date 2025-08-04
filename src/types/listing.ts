import { StringDateTime } from "./common";

export interface IListingSplitMergeHistoryChange {
  changedBy: string;
  changedOn: StringDateTime;
  id: number;
  parentIds: string;
  listingId: number;
  type: string;
  section: string;
  row: string;
  seats: string;
  quantity: number;
  shareType: string;
}
