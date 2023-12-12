import toast from '@/entyti/Toastr';
import httpClient from '@/http';
import { defineStore } from 'pinia';

export const Store = defineStore('Dashboard', {
    state: () => ({
        User: JSON.parse(localStorage.getItem("User") || "[]"),
    }),
    getters: {},
    actions: {
        async getDasbboard() {
            try {
                const User = JSON.parse(localStorage.getItem("User") || "[]")
                console.log(User)
                const result = await httpClient.get(`/dashboard/get/dashboard/${User?.Token}`);
                return result
            } catch (error) {
                toast.error('Erro ao buscar dados do Dashboard')
            }
        }
    },
})
