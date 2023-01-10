import axios from "axios";

const URL = axios.create({
  withCredentials: true,
});

class DataService {
  ping() {
    return URL.get(`/events/ping`);
  }
  create(msg) {
    return URL.post(`/events/`, msg);
  }
  getAll() {
    return URL.get("/events");
  }
  getById(id) {
    return URL.get(`/events/${id}`);
  }
  deleteEvent(id) {
    return URL.delete(`/events/${id}`)
  }
  deleteAllEvents(groupId) {
    return URL.delete(`/events/deleteAllEvents/${groupId}`)
  }
  getCurrentUser() {
    return URL.get("/getDisplayName");
  }
  logout() {
    return URL.get("/auth/logout")
  }
}

export default new DataService();
