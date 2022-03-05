<script>
export default {
  data() {
    return {
      selected: 0,
      members: [
        {
          image: "/favicon.ico",
          name: "Demi-LL",
          description: "Backend",
        },
        {
          image: "/BBOX.png",
          name: "Somebody",
          description: "Other things",
        },
      ],
    };
  },

  methods: {
    prev() {
      if (this.selected) {
        this.selected--;
      } else {
        this.selected = this.members.length - 1;
      }
    },
    next() {
      if (this.selected === this.members.length - 1) {
        this.selected = 0;
      } else {
        this.selected++;
      }
    },
  },
};
</script>

<template>
  <div
    id="members"
    class="carousel slide bg-dark w-100"
    data-ride="carousel"
    data-interval="50"
    style="height: 360px"
  >
    <ol class="carousel-indicators">
      <li
        v-for="(item, key) in members"
        :key="key"
        :class="{ active: key === selected }"
        @click="selected = key"
      />
    </ol>
    <div class="carousel-inner">
      <div
        v-for="(item, key) in members"
        :key="key"
        class="carousel-item"
        :class="{ active: key === selected }"
      >
        <img
          class="d-block mx-auto p-1"
          style="height: 270px"
          :src="item.image"
          :alt="item.name"
        />
        <div class="text-white text-center pb-3">
          <h5>{{ item.name }}</h5>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      role="button"
      data-slide="prev"
      @click="prev()"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      role="button"
      data-slide="next"
      @click="next()"
    >
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>
