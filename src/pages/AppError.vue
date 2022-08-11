<template>
    <div class="card card__result">
        <h1>Пользователь отменил покупку</h1>
        <AppButton @click="this.$router.push('/')">На главную</AppButton>
    </div>
</template>

<script>
import AppButton from "@/components/AppButton";

export default {
    name: "AppError",
    components: {
        AppButton,
    },
};
</script>

<style lang="scss" scoped>
.card__result {
    text-align: center;
}
</style>
