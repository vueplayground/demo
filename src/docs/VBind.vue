<template>
    <section class="p-6 pt-20 md:pt-6 pb-40">
        <article class="max-w-2xl mx-auto mb-6 mt-4 shadow border rounded-lg bg-white px-12 py-14 overflow-auto">
            <h1 class="mb-6 text-4xl">
                v-bind
            </h1>
            <p style="margin-top:15px" class="text-xl py-2 font-medium">
                Currently v-bind in the stylesheet is not supported.
            </p>
            <p style="margin-top:15px" class="text-lg">
                In the mean time, you can use style binding with the computed hook in the Options API instead:
            </p>
            <pre style="margin-top:15px" class="text-white rounded bg-slate-900 p-4 text-lg overflow-auto">
<code>
&lt;script&gt;
export default() {
  computed: {
    style()
      return {
        width: '' // Your code
      }
    }
  }
}
&lt;/script&gt;
</code> </pre>
        </article>
    </section>
</template>
<script>
    export default {
        data: () => ({})
    };
</script>
<style scoped></style>