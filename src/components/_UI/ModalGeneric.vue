<script setup>
import { Icon } from '@iconify/vue'
import ButtonIcon from './ButtonIcon.vue'

const { isActive } = defineProps({
  isActive: Boolean,
  showFooter: {
    type: Boolean,
    default: true
  }
})

defineEmits(['close-modal', 'confirm-action'])
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isActive" class="modal-mask">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>

          <div class="modal-body flex-column">
            <slot name="body"></slot>
          </div>

          <div v-if="showFooter" class="modal-footer">
            <ButtonIcon :text="'Inapoi'" @handle-click="$emit('close-modal')" />
            <ButtonIcon
              :text="'Confirma'"
              :variant="'dark-sm'"
              @handle-click="$emit('confirm-action')"
            />
          </div>
          <button class="close-icon" @click="$emit('close-modal')">
            <Icon icon="ph:x-bold" width="24" />
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  position: relative;
  width: 300px;
  margin: auto;
  padding: 1.375rem;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.close-icon {
  position: absolute;
  top: 0.875rem;
  right: 0.875rem;
  color: var(--clr-dark-grey);
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
  text-align: center;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.modal-footer {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
