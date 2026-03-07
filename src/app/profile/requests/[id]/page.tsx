import TicketDetailsClient from "./TicketDetailsClient";

export function generateStaticParams() {
    return [];
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    return <TicketDetailsClient params={params} />;
}
