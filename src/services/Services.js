import axios from 'axios'

const SERVICES_REST_API_URL = "http://localhost:9090/api/v1/services";
const PUJA_DETAIL_REST_API_URL = "http://localhost:9090/api/v1/puja_detail"
const EMPLOYEE_REST_API_URL = "http://localhost:9090/api/v1/employees"

class Services {
    getServices() {
        return axios.get(SERVICES_REST_API_URL);
    }

    createServices(service) {
        return axios.post(SERVICES_REST_API_URL, service);
    }

    getServicesById(serviceId) {
        return axios.get(SERVICES_REST_API_URL + '/' + serviceId);
    }

    updateServices(service, serviceId) {
        return axios.put(SERVICES_REST_API_URL + '/' + serviceId, service);
    }

    deleteServices(serviceId) {
        return axios.delete(SERVICES_REST_API_URL + '/' + serviceId);
    }

    getPujaDetail() {
        return axios.get(PUJA_DETAIL_REST_API_URL);
    }

    getEmployee() {
        return axios.get(EMPLOYEE_REST_API_URL)
    }
}

export default new Services();