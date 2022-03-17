<template>
    <v-container>
        <h2>Localização</h2>
        <span v-for="localizacao of localizacao" :key="localizacao.country">
        </span>
        <p>País: {{localizacao.country}}</p>
        <p>Código Postal: {{localizacao.postcode}}</p>
        <p>País: {{localizacao.places}}</p>
        
    </v-container>
</template>

<script>
export default {
    name: 'LocalizacaoPessoas',
    
        data() {
        return  {
            localizacao: []
        }
    },

    created() {
        fetch('https://api.zippopotam.us/us/33162')
           .then(resposta => resposta.json())
           .then(json => {
               this.localizacao = json
                console.log(this.localizacao)
           });

    }
}
</script>
    
<style scoped>

</style>