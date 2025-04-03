export function useWhatsApp() {
    const sendMessage = (title: string) => {
        const phoneNumber = "5514998039544";
        const message = `Olá! Gostaria de encomendar o *${title}*. Poderia me passar mais informações?`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return { sendMessage };
}
