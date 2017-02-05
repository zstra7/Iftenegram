
Vue.component('card', {
	
	data: function () {
		return {
			newComment: '',
			grow: false,
			liked: false
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
				<svg class="heart" v-bind:class="{ active: grow }" viewBox="0 0 32 29.6">
  					<path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
					c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
				</svg> 
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
    		if (!this.liked) {
    			this.$emit('like', index);
    			this.grow = true;
    			this.liked = true;
    		}
    		
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
    	{ name : 'Karl', image: 'img/3.jpg', location: "Brisbane", comments: [], likes: 2}
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