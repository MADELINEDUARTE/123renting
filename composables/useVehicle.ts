export interface Currency {
    code: string;
    name: string;
    symbol: string;
}

interface Common {
    currency: Currency;
    tax_percentage: number;
    tax_key: string;
}

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

interface Services {
    mandatory: any[];
    not_mandatory: any[];
}

interface InitialFranchises {
    theft_fire: number;
    damage: number;
    rca: number;
}

interface Franchises extends InitialFranchises {
    theft_fire_changed: boolean;
    damage_changed: boolean;
    rca_changed: boolean;
}

interface FeeOnPricelistType {
    type: string;
    with_tax: number;
    without_tax: number;
    tax: number;
    duration: number;
}

interface Kms {
    extra_price_with_tax: number;
    extra_price_without_tax: number;
    extra_price_tax: number;
    included_per_day: number;
    total_included: number;
}

interface TransferFee {
    with_tax: number;
    without_tax: number;
    tax: number;
}

interface ServicesRate {
    with_tax: number;
    without_tax: number;
    tax: number;
}

interface PickupFee {
    with_tax: number;
    without_tax: number;
    tax: number;
}

interface DropoffFee {
    with_tax: number;
    without_tax: number;
    tax: number;
}

interface Discount {
    with_tax: number;
    without_tax: number;
    tax: number;
}

interface RentRateDiscountIncluded {
    with_tax: number;
    without_tax: number;
    tax: number;
}

interface Advance {
    with_tax: number;
    without_tax: number;
    tax: number;
}

interface FinalPrice {
    with_tax: number;
    without_tax: number;
    tax: number;
}

export interface Pricelist {
    name: string;
    description: string;
    fee_on_pricelist_type: FeeOnPricelistType;
    id: number;
    is: string;
    fee_type: string;
    lasts_based_on_type: number;
    price_referred_to: string;
    kms: Kms;
    transfer_fee: TransferFee;
    services_rate: ServicesRate;
    pickup_fee: PickupFee;
    dropoff_fee: DropoffFee;
    discount: Discount;
    rent_rate_discount_included: RentRateDiscountIncluded;
    advance: Advance;
    coupon_details: any[];
    others: any[];
    final_price: FinalPrice;
}

interface ModelDetails {
    id: number;
    name: string;
    acriss_code: string;
    description: string;
    extra_details: string;
    brand: string;
    model: string;
    type_id: number;
    type_name: string;
    tipology: string;
    category_id: number;
    category_name: string;
    category_upselling: number;
    fuel_key: string;
    fuel_name: string;
    transmission_key: string;
    transmission_name: string;
    drive_type: string;
    air_condition: string;
    air_conditioning: string;
    doors: number;
    hook: string;
    max_people: number;
    images: string[];
}

export interface Vehicle {
    model_id: number;
    min_required_age: number;
    max_required_age: string;
    age_is_ok: boolean;
    available: boolean;
    mean_rate: number;
    services: Services;
    initial_franchises: InitialFranchises;
    initial_deposit: number;
    franchises: Franchises;
    deposit: number;
    pricelists: Pricelist[];
    model_details: ModelDetails;
}

export interface Result {
    common: Common;
    start: string;
    end: string;
    pickup: Location;
    dropoff: Location;
    vehicles: Vehicle[];
    coupon_status: string;
}

export interface RootObject {
    result: Result;
    status: boolean; 
}

export const initialResult: Result = {
    common: {
        currency: {
            code: "",
            name: "",
            symbol: ""
        },
        tax_percentage: 0,
        tax_key: ""
    },
    start: "",
    end: "",
    pickup: {
        id: 0,
        code: "",
        name: "",
        description: "",
        type: "",
        phone: "",
        email: "",
        complete_address: "",
        address: "",
        city: "",
        zip: "",
        province: "",
        country: "",
        streetNumber: "",
        latitude: 0,
        longitude: 0,
        extra_fee_with_tax: 0,
        extra_fee_without_tax: 0,
        extra_fee_tax: 0,
        timetable_pickup: 0,
        timetable_dropoff: 0,
        web: 0
    },
    dropoff: {
        id: 0,
        code: "",
        name: "",
        description: "",
        type: "",
        phone: "",
        email: "",
        complete_address: "",
        address: "",
        city: "",
        zip: "",
        province: "",
        country: "",
        streetNumber: "",
        latitude: 0,
        longitude: 0,
        extra_fee_with_tax: 0,
        extra_fee_without_tax: 0,
        extra_fee_tax: 0,
        timetable_pickup: 0,
        timetable_dropoff: 0,
        web: 0
    },
    vehicles: [],
    coupon_status: ""
};

const vehicles = {
    data: reactive<RootObject>({
        result: initialResult,
        status: false
    }),
    setData: function(result: Result){
        this.data.result = result
        this.data.status = true
    }
}

export const useVehicle = () => {
    return { vehicles  }
}
