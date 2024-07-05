<template>
  <section class="flex flex-col lg:flex-row mx-auto max-w-7xl">
    <div class="w-full lg:w-8/12">
      <AcademicsPrincipal />
      <AcademicsFacultyStaff />
      <AcademicsSchools />
    </div>
    <!-- sticky section -->
    <div class="my-4 px-5 w-full lg:w-4/12">
      <div class="sticky top-24 space-y-10">
        <AcademicsCallToAction />
        <AcademicsSchoolsList />
      </div>
    </div>
  </section>
  <AcademicsFaq />
</template>

<script setup>
import AcademicsCallToAction from "./AcademicsCallToAction.vue";
import AcademicsFacultyStaff from "./AcademicsFacultyStaff.vue";
import AcademicsPrincipal from "./AcademicsPrincipal.vue";
import AcademicsSchools from "./AcademicsSchools.vue";
import AcademicsSchoolsList from "./AcademicsSchoolsList.vue";
import AcademicsFaq from "./AcademicsFaq.vue";
</script>
