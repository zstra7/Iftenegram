
Vue.component('card', {
	
	data: function () {
		return {
			newComment: ''	
		}
	},

	template: `
		<div class="card">
			<div class="header">
				<span class="name">
					<span class="header-image"></span>
					{{ content.name }}
				</span>
			</div>
			<div class="image">
				<img v-bind:src="content.image" v-on:dblclick="increment(index)">
			</div>
			<section class="info-wrapper">
				<div class="likes">
					{{ content.likes }} likes
				</div>
 				<div class="comments">
					<span class="comment" v-for="comment in content.comments">
						<span class="author">Alex Iftene</span>
						{{ comment }}
					</span>
				</div>
				<div class="divider"></div>
				<input
    				v-model="newComment"
    				v-on:keyup.enter="sendComment(index)"
    				placeholder="Add a comment"
    				class="message-input"
  				>
  			</section>
		</div>
	`,
	methods: {
    	sendComment: function (index) {
    		this.$emit('comment', this.newComment, index);
      		this.newComment = '';
      		console.log(index);
      		
    	},

    	increment: function (index) {
    		this.$emit('like', index);
    	}


  	},
  	props: ['content', 'index']
})

var app = new Vue({
 	el: '#app',
 	data: {
    posts: [
    	{ name : 'Alex', image: 'img/1.jpg', location: "NYC", comments: ["yeah nice","wow"], likes: 43},
    	{ name : 'Jake', image: 'img/2.jpg', location: "Kingaroy", comments: ["yeah nice","wow"], likes: 66},
    	{ name : 'Karl', image: 'img/1.jpg', location: "Brisbane", comments: [], likes: 2}
    ]
	},
	methods: {
  		addComment: function (comment,index) {
  			this.$data.posts[index].comments.push(comment);
  		},
  		addLike: function (index) {
  			this.$data.posts[index].likes += 1;
  		}
  	} 
})