export interface TicketContainerProps {
    id: number;
    type: string;
    title: string;
    datetime: string;
    seatRank: string;
    seat: string;
    cast: string;
    originalPrice: number;
    reservationFee: number;
    discountName: string;
    discountRate: number;
    additionalDiscount: number;
    discountPrice: number;
    tags: string[];
}
