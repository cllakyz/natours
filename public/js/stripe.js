import axios from 'axios';
import { showAlert } from "./alerts";
const stripe = Stripe('pk_test_51H1duzGMH5QFtROY82mUUbT1xMcPPS4LBxM7pZh64kFQN1emOnXOq1hwpYvTWo6iySNijXJo1GNv5VmHpaJpeddP00yZ3ctMHi');

export const bookTour = async tourId => {
    try {
        // 1) Get checkout session from API
        const sessionData = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

        // 2) Create checkout form + chanre credit card
        await stripe.redirectToCheckout({
            sessionId: sessionData.data.data.session.id
        });

    } catch (e) {
        showAlert('error', e);
    }
};