<template>
  <div class="px-4 sm:px-4">
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
  </div>
</template>

<script setup>
import AcademicsCallToAction from "@/components/AcademicsCallToAction.vue";
import AcademicsFacultyStaff from "@/components/AcademicsFacultyStaff.vue";
import AcademicsPrincipal from "@/components/AcademicsPrincipal.vue";
import AcademicsSchools from "@/components/AcademicsSchools.vue";
import AcademicsSchoolsList from "@/components/AcademicsSchoolsList.vue";
import AcademicsFaq from "@/components/AcademicsFaq.vue";
</script>
