<template>
    <button
        class="ch-btn"
        :class="[
            `ch-btn--${theme}`,
            size !== 'normal' ? `ch-btn--${size}` : '',
            { 'ch-btn--block': block, 'ch-btn--loading': loading },
        ]"
        :disabled="disabled || loading"
        @click="$emit('click')"
    >
        <span class="ch-btn__content" :style="loading ? { opacity: 0 } : {}">
            <!-- @slot Use this slot for default content -->
            <slot></slot>
        </span>

        <Transition name="fade">
            <span v-if="loading" class="ch-btn__loader">
                <AppLoader v-if="!hasLoadingSlot" size="small" color="#ffffff" />

                <!-- @slot Use this slot for loading content -->
                <slot v-else name="loading"></slot>
            </span>
        </Transition>
    </button>
</template>

<script>
// Components
import AppLoader from "@/components/AppLoader";

export default {
    name: "AppButton",
    components: {
        AppLoader,
    },
    props: {
        /**
         * The theme of the button
         * @values primary, warning, error
         */
        theme: {
            type: String,
            default: "primary",
            validator(value) {
                return ["primary", "secondary", "text"].includes(value);
            },
        },
        /**
         * Extend the full available width
         */
        block: {
            type: Boolean,
            default: false,
        },
        /**
         * The size of the button
         * @values small, normal, large
         */
        size: {
            type: String,
            default: "normal",
            validator(value) {
                return ["small", "normal", "large"].includes(value);
            },
        },
        /**
         * Disable the button
         */
        disabled: {
            type: Boolean,
            default: false,
        },
        /**
         * Show loader
         */
        loading: {
            type: Boolean,
            default: false,
        },
    },
    emits: [
        /**
         * Triggers when the button is clicked
         */
        "click",
    ],
    computed: {
        hasLoadingSlot() {
            return !!this.$slots.loading;
        },
    },
};
</script>

<style lang="scss" scoped>
.ch-btn {
    position: relative;
    height: 52px;
    padding: 12px 16px;
    font-size: 18px;
    line-height: 20px;
    color: #ffffff;
    border: none;
    transition: 0.2s;
    border-radius: 12px;
    font-weight: 900;
    cursor: pointer;

    &:disabled {
        opacity: 0.25;
    }

    &--primary {
        background: #000000;
        color: #ffffff;
    }
    &--secondary {
        background: #f2f2f2;
        color: #000000;
    }
    &--text {
        border: none;
        color: #000000;
        background-color: transparent;
    }

    &--block {
        display: block;
        width: 100%;
    }
    &--small {
        height: 44px;
        font-weight: 900;
        font-size: 18px;
    }
    &--large {
        min-height: 64px;
        letter-spacing: 0.015em;
        font-weight: 900;
        font-size: 24px;
        line-height: 115%;
    }
    &__content {
        transition: opacity 0.2s;
    }
    &__loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
.fade {
    &-enter-active,
    &-leave-active {
        transition: opacity 0.2s;
    }
    &-enter-from,
    &-leave-to {
        opacity: 0;
    }
}
</style>
