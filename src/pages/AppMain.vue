<template>
    <div class="card">
        <h2>Тестировка Веб Оплат (Redirect)</h2>

        <div class="card__input">
            <input type="text" placeholder="Введите URL оплаты" v-model="paymentUrl" />
        </div>

        <div class="card__input">
            <input type="text" placeholder="Введите track_id" v-model="track_id" />
        </div>

        <div class="card__radio">
            <p>Окружение:</p>
            <div>
                <UiRadio v-model="environment" value="stage" name="stage" label="stage" />
                <UiRadio v-model="environment" value="production" name="production" label="production" />
            </div>
        </div>

        <div class="card__textarea">
            <label for="success_url">Введите ссылку при успешной оплате:</label>
            <textarea id="success_url" type="text" placeholder="" v-model="successUrl" rows="2" />
        </div>

        <div class="card__textarea">
            <label for="failure_url">Введите ссылку при отмене оплаты:</label>
            <textarea id="failure_url" type="text" placeholder="" v-model="failureUrl" rows="2" />
        </div>

        <AppButton block @click="handlePay">Оплатить</AppButton>
    </div>
</template>

<script>
import UiRadio from "@/components/RadioButton";
import AppButton from "@/components/AppButton";
import ChocoPayWidget from "choco-pay-widget";

export default {
    name: "AppMain",
    components: {
        UiRadio,
        AppButton,
    },
    data() {
        return {
            paymentUrl: "",
            track_id: "",
            environment: "stage",
            successUrl: "https://chocopay-widget-demo.web.app/success",
            failureUrl: "https://chocopay-widget-demo.web.app/error",
        };
    },
    methods: {
        handlePay() {
            const ChocoPayWidgetItem = new ChocoPayWidget({
                track_id: this.track_id,
                paymentUrl: this.paymentUrl,
                environment: this.environment,
                sucessUrl: this.successUrl,
                failureUrl: this.failureUrl,
            });

            ChocoPayWidgetItem.initPayment();
        },
    },
};
</script>
