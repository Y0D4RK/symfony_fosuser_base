<template>

  <div>
    <Modal :show='show' @close='closeModal()' :width='350'>
      <span slot='header'>Connexion</span>
      <div slot='content'>
        <FormText :required='true' type='email' v-model='form.login' :$v='$v.form.login' @input='$v.form.login.$touch()'/>

        Login: <pre>{{form.login}}</pre>
      </div>
      <div class='footer'></div>
    </Modal>
  </div>
  
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import { State, Action, Getter, Mutation } from "vuex-class";

import { Modal, FormText } from "@components";
import { required, email } from 'vuelidate/lib/validators'

@Component({
  name: "Connexion",
  components: {
    Modal, FormText
  },
  validations: {
    form: {
      login: {required, email},
      password: required
    }
  }
})
export default class Connexion extends Vue {
  public form = {
    login: '',
    password:''
  }

  @Prop() show: boolean;
  
  closeModal() {
    this.$emit("close");
  }
}
</script>



<style lang='scss'>

</style>

