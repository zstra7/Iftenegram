
Vue.component('card', {
	
	data: function () {
		return {
			newComment: ''	
		}
	},

	template: `
		<div class="card">
			<div class="header">
				<span>
					{{ content.name }}
				</span>
				<span>
					{{ content.location }}
				</span>
			</div>
			<div class="image">
				<img v-bind:src="content.image" width="100px">
			</div>
			<div class="comments">
				<span v-for="comment in content.comments">
					{{ comment }}
				</span>
			</div>
			
			<input
    			v-model="newComment"
    			v-on:keyup.enter="sendComment(index)"
    			placeholder="Add a comment"
  			>
		</div>
	`,
	methods: {
    	sendComment: function (index) {
    		this.$emit('comment', this.newComment, index);
      		this.newComment = '';
      		console.log(index);
      		
    	}
  	},
  	props: ['content', 'index']
})



var app = new Vue({
 	el: '#app',
 	data: {
    posts: [
    	{ name : 'Alex', image: 'img/1.jpg', location: "NYC", comments: ["yeah nice","wow"], likes: 0},
    	{ name : 'jake', image: 'img/1.jpg', location: "Kingaroy", comments: ["yeah nice","wow"], likes: 0},
    	{ name : 'Karl', image: 'img/1.jpg', location: "Brisbane", comments: [], likes: 0}
    ]
	},
	methods: {
  		addComment: function (comment,index) {
  			this.$data.posts[index].comments.push(comment);
  		}
  	} 
})