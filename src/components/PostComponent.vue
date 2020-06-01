<template>
  <div class="container">
    <p class="error" v-if="error">{{error}}</p>
    <b-card bg-variant="info" class="w-60 h-15 overflow-hidden">
      <b-row no-gutters>
        <b-col md="4">
          <b-card-img src="https://picsum.photos/200/200/?image=10" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-form-group
            label-cols-sm="5"
            label="ID:"
            label-align-sm="right"
            label-for="nested-street"
          >
            <b-form-input id="nested-street"></b-form-input>
          </b-form-group>
          <b-form-group label-cols-sm="1" label-align-sm="center" label-for="nested-street">
            <b-button variant="danger">SS</b-button>
            <b-button variant="success">Turbid</b-button>
            <b-button variant="primary">COD</b-button>
          </b-form-group>
        </b-col>
      </b-row>
    </b-card>
    <b-table
      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :no-border-collapse="noCollapse"
      :items="posts"
      :fields="fields"
      :head-variant="headVariant"
      :table-variant="tableVariant"
    ></b-table>
  </div>
</template>

<script>
import PostService from "../PostService";
export default {
  name: "PostComponent",
  data() {
    return {
      fields: ["id", "turbid", "ss", "COD"],
      posts: [],
      error: "",
      text: ""
    };
  },
  async created() {
    //   created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcff58;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
