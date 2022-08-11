<template>
    <div
        class="ch-loader-container"
        :class="[
            size !== 'normal' ? `ch-loader-container--${size}` : '',
            {
                'ch-loader-container--absolute': absolute,
                'ch-loader-container--withBackground': withBackground,
            },
        ]"
    >
        <div class="ch-loader">
            <div :style="{ borderColor: color }"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppLoader",
    props: {
        /**
         * The size of the spinner
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
         * The color of the spinner
         */
        color: {
            type: String,
            default: "#F6074C",
        },
        /**
         * Absolute centered vertically and horizontally
         */
        absolute: {
            type: Boolean,
            default: false,
        },
        withBackground: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss" scoped>
@keyframes spinner {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
.ch-loader {
    position: relative;
    width: 100%;
    height: 100%;
    transform: translateZ(0) scale(1);
    transform-origin: 0 0;
    backface-visibility: hidden;
    div {
        box-sizing: content-box;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 28px;
        height: 28px;
        border: 3px solid;
        border-top-color: transparent !important;
        border-radius: 50%;
        animation: spinner 1s linear infinite;
    }
}
.ch-loader-container {
    display: block;
    width: 64px;
    height: 64px;
    margin: auto;
    overflow: hidden;

    &--withBackground {
        background: #ffffff;
        /* Shadow */

        box-shadow: 0px 92px 92px rgba(0, 0, 0, 0.05), 0px 3px 38.4354px rgba(0, 0, 0, 0.0334858),
            0px -3px 20.5494px rgba(0, 0, 0, 0.06), 0px 5.79369px 11.5198px rgba(0, 0, 0, 0.0189792),
            0px 2.40368px 6.11809px rgba(0, 0, 0, 0.0132742),
            0px 0.705169px 2.54588px rgba(0, 0, 0, 0.00743532);
        border-radius: 24px;
    }

    &--absolute {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    &--large {
        width: 92px;
        height: 92px;

        .ch-loader div {
            top: 50%;
            left: 50%;
            width: 42px;
            height: 42px;
            border-width: 3px;
        }
    }
    &--small {
        width: 32px;
        height: 32px;

        .ch-loader div {
            top: 50%;
            left: 50%;
            width: 18px;
            height: 18px;
            border-width: 3px;
        }
    }
}
</style>
