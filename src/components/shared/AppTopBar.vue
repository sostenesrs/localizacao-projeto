<template>
<div class = "app-top-bar">
        <v-app-bar app color="light-blue accent-3" dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>Localização Pessoas 📌</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
        <v-list
            nav
            dense
        >
            <v-list-item-group
                v-model="group"
                active-class="blue--text text--light-blue accent-3">
                <router-link to="/">
                    <v-list-item>
                        <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Início</v-list-item-title>
                    </v-list-item>
                </router-link>

                <router-link to="/listaPessoas">
                    <v-list-item>
                        <v-list-item-icon>
                        <v-icon>mdi-account-multiple-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Lista Pessoas</v-list-item-title>
                    </v-list-item>
                </router-link>

            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'AppTopBar',
    data: () => ({
        drawer: false,
        group: null,
    }),
}
</script>

<style scoped>
    .app-top-bar a {
        text-decoration: none;
    }
</style>