<template>
  <div>
    <h2>{{ title }}</h2>
    <p class="date">{{ date }}</p>
    <p class="text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Article",
  data: function () {
    return {
      title: "que semer en août",
      date: "27/07/2021",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam enim voluptate debitis ducimus, inventore molestias soluta doloribus deleniti harum quasi architecto dicta sit tempora dolor nemo quisquam? Velit, rem?",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac metus vestibulum, tristique massa vitae, hendrerit mi. Fusce id turpis quis dolor vulputate dignissim et ac orci. Ut placerat odio a consectetur venenatis. Nam nec mauris eget erat hendrerit rutrum. Donec ut molestie quam. Sed quis auctor velit. Nunc nec iaculis dolor, sed luctus nunc. Vestibulum viverra lacus purus, vitae pretium eros posuere vitae. Cras vel accumsan nulla, in egestas felis. Nam neque ipsum, ultrices ac dignissim in, gravida eu justo. In semper diam vel nisl sollicitudin, finibus elementum ipsum aliquet. Vestibulum vel metus eu eros vestibulum iaculis. Nullam facilisis ipsum elit, a elementum libero semper nec. Suspendisse dictum mattis dolor id faucibus.

Aliquam sollicitudin ullamcorper enim, ac porta odio condimentum non. In mi sem, vestibulum fringilla semper sit amet, eleifend sed odio. Aenean laoreet tincidunt dui, vel iaculis leo lacinia ac. Nulla tincidunt euismod ante vitae dapibus. Nullam nec ultrices massa, non lobortis enim. Praesent tincidunt magna sit amet nibh suscipit gravida. Aenean viverra, nulla non interdum fermentum, nisl urna iaculis felis, sit amet ullamcorper sem dolor eget neque. Cras ac fringilla lorem. Etiam placerat id eros nec porttitor.

Proin elementum id augue in semper. Etiam eu arcu at lacus sagittis porttitor. Phasellus at molestie ante. Phasellus efficitur orci ac neque eleifend, eu finibus ante fringilla. Pellentesque lacinia nunc non magna condimentum imperdiet. Duis vel nisi a nunc porttitor pulvinar venenatis vitae lacus. Curabitur turpis ligula, varius eget sem quis, accumsan accumsan leo. Morbi a arcu nec sapien gravida molestie. Sed malesuada dapibus ex, fermentum eleifend felis. Phasellus ullamcorper vitae neque sed fermentum. Etiam felis nunc, vestibulum ut nisi vitae, rutrum posuere lacus.

Proin a dolor ac tellus dictum fermentum at non libero. Nulla sapien sapien, pretium vitae eleifend consequat, fermentum eu erat. Morbi accumsan pretium neque, vel luctus ex vulputate ut. Praesent massa ipsum, faucibus eu aliquam id, vulputate sed orci. Pellentesque eu sollicitudin arcu, sed tempus eros. Nulla id maximus urna. Donec scelerisque nibh a lacinia eleifend. Suspendisse efficitur nisl placerat rutrum tempor. Aliquam nec aliquet lorem. Aenean lorem ante, fermentum in justo et, fringilla sollicitudin ex. Sed sed odio venenatis, sodales tellus a, tincidunt risus. Etiam scelerisque velit est, quis pharetra justo efficitur sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus ac libero lectus. Nunc rhoncus vestibulum leo, non laoreet eros fringilla non.

Praesent eu risus vitae sapien pulvinar bibendum id id dolor. Sed vehicula nec tortor sit amet placerat. Etiam et lobortis orci, non ullamcorper turpis. Cras consequat massa in magna porta, nec posuere dolor eleifend. Nam quis nisi nibh. Mauris bibendum metus placerat finibus iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam id suscipit ex. Aenean placerat iaculis convallis. In et neque posuere, vehicula quam nec, tristique leo. Nunc eget tristique nibh. Vestibulum tortor diam, tincidunt quis lorem eget, ultricies tempus augue.`,
    };
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #65ad64;
  text-transform: uppercase;
}

.date {
  margin: 6px 0 12px 3px;
}

.text {
  font-size: 1.1rem;
}
</style>
