import axios from "axios";

const MESSAGE_BASE_API_URL = "http://localhost:8000/api/v1/messages";

class FormService {
    sendMessage(message) {
        return axios.post(MESSAGE_BASE_API_URL, message)

    }
}

const formService = new FormService(); 
export default formService;

