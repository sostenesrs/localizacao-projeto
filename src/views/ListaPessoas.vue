<template>
    <v-container>
        <h2>Pessoas</h2>
         <v-img class="localizacao1-imagem mb-4" src="https://www.pikpng.com/pngl/b/295-2958164_group-of-people-image-people-cartoon-transparent-background.png" alt="">
        </v-img>

        <p>João da Silva</p>
        <div class="flexbox">
        <v-img class="localizacao2-imagem mb-2" src="https://i.pinimg.com/474x/2f/01/d2/2f01d2c2c69f01fdd1bf77b332e21971.jpg" alt="">
        </v-img>

        <v-btn id="botao1">
            <router-link to="/LocalizacaoPessoas">Minha Localização</router-link>
        </v-btn>
        </div>

    </v-container>
</template>

<script>
export default {
    name: 'ListaPessoas',
}
</script>

<style scoped>
    .flexbox{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .localizacao2-imagem{
        width: 200px;
        height: 200px;
    }

    #botao1{
        background-color: #81D4FA;
    }


</style>