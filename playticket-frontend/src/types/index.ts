export interface TicketContainerProps {
    id: number;
    type: string;
    title: string;
    datetime: string;
    seatRank: string;
    seat: string;
    cast: string;
    originalPrice: number;
    discountName: string;
    discountRate: number;
    additionalDiscount: boolean;
    discountPrice: number;
    img: string;
    tags: string[];
}
