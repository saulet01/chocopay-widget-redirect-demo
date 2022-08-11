<template>
    <label class="radio-container">
        <div>
            <input
                v-model="model"
                type="radio"
                :name="name"
                :value="value"
                :disabled="disabled"
                @change.stop
            />

            <span class="radio-checkmark" :class="{ 'radio-checkmark--disabled': disabled }"></span>
        </div>

        <div>
            <span class="text-base">{{ label }}</span>

            <!-- Слот -->
            <slot></slot>
        </div>
    </label>
</template>

<script>
import { computed } from "vue";

export default {
    name: "UiRadio",
    props: {
        label: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        modelValue: {
            required: true,
        },
        value: {
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
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
.radio {
    &-container {
        position: relative;
        display: inline-flex;
        align-items: center;

        span {
            top: 0;
            display: inline-block;
        }

        input[type="radio"] {
            position: absolute;
            width: 0;
            height: 0;
            opacity: 0;
        }
    }

    &-checkmark {
        position: relative;
        width: 20px;
        height: 20px;
        border: 2px solid #000;
        border-radius: 50%;
        margin-right: 4px;

        &:after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: none;
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 50%;
            background: #000;
        }

        &--disabled {
            opacity: 0.25;
        }
    }

    &-container input[type="radio"]:checked ~ &-checkmark {
        border: 2px solid #000;

        &:after {
            display: block;
        }
    }
}

.text-base {
    font-weight: 500;
}
</style>
