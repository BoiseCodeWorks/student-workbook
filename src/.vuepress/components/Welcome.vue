<template>
  <section class="home">
    <header class="text-center mb-5">
      <h2 id="description text-center">Learn to Code. Develop your Future!</h2>
      <img
        height="200"
        src="https://bcw.blob.core.windows.net/public/img/8600856373152463"
      />
    </header>
    <div
      class="features"
      style="
        transition: transform 0.25s ease-in-out 0.16s,
          opacity 0.25s ease-in-out 0.16s;
        transform: translateY(0px);
        opacity: 1;
      "
    >
      <div class="feature">
        <a href="/fs-student-guide/resources" title="Readings">
          <h2>Weekly Reading and Content</h2>
          <p>
            A collected works of reading material to broaden the understanding
            of the material
          </p>
        </a>
      </div>
      <div class="feature">
        <a href="/fs-student-guide/vocab" title="Vocabulary">
          <h2>Vocabulary</h2>
          <p>
            All the key phrases and terms you will need to be successful as a
            software developer
          </p>
        </a>
      </div>
    </div>
    <footer class="mt-5 pt-5 footer-wrapper">
      <div class="footer">Made with ❤️ by CodeWorks</div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "Welcome"
}
</script>

<style scoped>
</style>