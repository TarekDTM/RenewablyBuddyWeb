export interface Item {
    name?: string,
    description?:string,
    img?:string,
    id?: number,
}
export interface SelectedItem extends Item {
    hoursPerDay?: number,
    count?: number,
}