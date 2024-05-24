interface Location {
    id: number;
    code: string;
    name: string;
    description: string;
    type: string;
    phone: string;
    email: string;
    complete_address: string;
    address: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    streetNumber: string;
    latitude: number;
    longitude: number;
    extra_fee_with_tax: number;
    extra_fee_without_tax: number;
    extra_fee_tax: number;
    timetable_pickup: number;
    timetable_dropoff: number;
    web: number;
}

const locations = {
    data:  reactive<Location[]>([]),
    setLocations: function(data:Location[]) {
        this.data.push(...data)
    }
};

export const useLocation = () => {
    return { locations }
}
