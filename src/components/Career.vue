<template>
  <div class="career-section">
    <h2 class="section-title">Career Path</h2>
    <div class="career-timeline">
      <div
        v-for="(item, index) in careerPath"
        :key="index"
        :class="[
          'timeline-item',
          index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right',
        ]"
      >
        <div class="timeline-content">
          <div class="timeline-date">{{ item.date }}</div>
          <h3 class="timeline-title">{{ item.title }}</h3>
          <div class="timeline-organization">
            <img
              :src="item.logo"
              :alt="item.organization + ' logo'"
              style="
                height: 24px;
                margin-right: 4px;
                padding-bottom: 3px;
                padding-left: 5px;
                vertical-align: middle;
              "
            />
            {{ item.organization }}
          </div>
          <p>{{ item.description }}</p>
          <div class="timeline-details">
            <h4 style="margin-bottom: 8px; font-size: 0.9rem">
              Key Achievements:
            </h4>
            <ul style="padding-left: 20px; margin-bottom: 12px">
              <li v-for="(achievement, i) in item.achievements" :key="i">
                {{ achievement }}
              </li>
            </ul>
            <div class="timeline-skills">
              <span
                v-for="skill in item.skills"
                :key="skill.name"
                class="timeline-skill"
              >
                <i :class="skill.icon"></i> {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Career",
  data() {
    return {
      careerPath: [
        {
          date: "05/05/2025 - 30/06/2025",
          title: "IT Helpdesk Intern",
          organization: "GE Aerospace Poland Sp. z o.o.",
          logo: "https://tinyurl.com/ge-logo",
          description:
            "Helped and maintained multiple appliences for users across the GE Aerospace Site.",
          achievements: [
            "Re-enrolled 200+ company laptops to new requiered standard",
            "Improved efficiency in accessing key intranet components for new hires",
          ],
          skills: [
            { name: "Windows", icon: "fab fa-windows" },
            { name: "Azure", icon: "fab fa-microsoft" },
            { name: "Networking", icon: "fas fa-network-wired" },
            { name: "HTML/CSS", icon: "fab fa-html5" },
          ],
        },
      ],
    };
  },
};
</script>
