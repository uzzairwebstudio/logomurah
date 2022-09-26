
function WhatsappText(props) {
    return `https://api.whatsapp.com/send/?phone=60173618359&text=${encodeURIComponent(props.text)}&type=phone_number`
}

export default WhatsappText