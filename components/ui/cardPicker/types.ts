export type CardProps = {
    imageSrc: string,
    title: string,
    type: string,
    description: string,
    onClick: () => void,
}

export type CardPickerProps = {
    activeCard: number,
    cards: Omit<CardProps,'onClick'>[]
    onCardSelect: (index: number) => void
}