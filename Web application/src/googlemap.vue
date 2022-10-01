<!-- eslint-disable no-tabs -->
<template>
	<GoogleMap
	api-key="AIzaSyDxEKrZl10e3Ks1gegU0a1rSD-nEdeDC1c"
	style="width: 100%; height: 500px"
	:center="center"
	:zoom="15"
	>
		<Marker :options="{ position: center }" />
	</GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map'

export default {
  components: { GoogleMap, Marker },
  setup () {
    const center = { lat: 40.689247, lng: -74.044502 }
    return { center }
  }
}
</script>
