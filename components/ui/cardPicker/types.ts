export interface CardProps  {
    
    imageSrc: string,
    title: string,
    type: string,
    description: string,
    active?: boolean,
    onclick? : () => void

}

export type CardPickerProps = {
    activeCard?: number,
    cards: CardProps[]
    onCardSelect: (index: number) => void
}