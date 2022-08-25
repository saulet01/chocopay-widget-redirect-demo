<template>
    <label class="checkbox-container">
        <input v-model="model" type="checkbox" :value="value" @change.stop />
        <span class="checkbox-mark"></span>
        <span class="checkbox-text">{{ label }}</span>

        <!-- Слот -->
        <slot></slot>
    </label>
</template>

<script>
import { computed } from "vue";

export default {
    name: "AppCheckbox",
    props: {
        label: {
            type: String,
            required: true,
        },
        modelValue: {
            required: true,
        },
        value: {
            default: null,
        },
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
        const model = computed({
            get() {
                return props.modelValue;
            },
            set(value) {
                emit("update:modelValue", value);
            },
        });

        return {
            model,
        };
    },
};
</script>

<style lang="scss" scoped>
.checkbox {
    &-container {
        position: relative;
        display: inline-flex;
        align-items: center;

        &:active {
            outline: 0;
        }

        input[type="checkbox"] {
            position: absolute;
            width: 0;
            height: 0;
            opacity: 0;
        }
    }

    &-text {
        font-weight: 500;
        font-size: 16px;
    }

    &-mark {
        width: 20px;
        height: 20px;
        border: 2px solid #000;
        border-radius: 0.5rem;
        position: relative;
        flex-shrink: 0;
        margin-right: 0.5rem;

        &:after {
            content: "";
            position: absolute;
            left: 6px;
            top: 2px;
            width: 5px;
            height: 10px;
            display: none;
            border: solid white;
            border-width: 0 3px 3px 0;
            transform: rotate(45deg);
        }
    }

    &-container input[type="checkbox"]:checked ~ &-mark {
        background-color: #000;
        border-color: #000;

        &:after {
            display: block;
        }
    }
}
</style>
