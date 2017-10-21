<template>
    <div>
      <div class="input-container">
        <input  class='input-form'
                :type="type"
                :value='value'
                :class='{
                  formError: (!valid && dirty),
                  formValid: (valid && dirty),
                }'
                :placeholder="placeholder"
                :required='required'
                :disabled='disabled'
                @input="updateValue($event.target.value)" />

        <div v-show='valid && dirty' class="form-valid-icon form-valid"></div>
        <div v-show='!valid && dirty' class="form-valid-icon form-invalid"></div>
        <div v-show='!dirty && $v.required' class="form-valid-icon form-required"></div>
      </div>
      <div class="errorMessage" v-show='!valid && dirty'>
        <span v-for='(key, value) in $v.$error' :key='key' v-if='$v.$error && key != "required"'>
          <span>{{$v.errors[key]}}</span>
        </span>
        <span v-if='$v.$error.required && $v.required'>Champs requis</span>
      </div>
      <div class="infoMessage" v-show='$v.$pending'>
        <span>Verification...</span>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import { IValidator } from 'vuelidate';

@Component({
  name: 'FormText',
})
export default class FormText extends Vue {

  @Prop() value: string;
  @Prop({required: false}) type: string;
  @Prop({required: false}) placeholder: string;
  @Prop({required: false}) error: boolean;
  @Prop({required: false}) disabled: boolean;
  @Prop({required: false}) required: false;
  @Prop({required: false}) $v: IValidator;

  updateValue(value){
    this.$emit('input', value);
  }

  get valid(){
    return !this.$v.$invalid;
  }

  get dirty(){
    return this.$v.$dirty;
  }
}
</script>



<style lang='scss'>

</style>

