const express = require("express");
const router = express.Router();

const tarotCards = [
  {
    name: "The Fool",
    description:
      "The card suggests that your investments have the potential to yield positive results. The Fool signifies new beginnings, taking risks, and embracing unconventional approaches. It encourages you to trust your instincts and explore new opportunities. However, it's important to exercise caution and avoid recklessness.\n\nThe Fool card indicates that success may come through a sense of adventure and learning from both positive and negative outcomes. Overall, the card implies that your investments have a promising outlook, but the ultimate result will depend on your willingness to embrace the journey and make informed decisions.",
    image: "/tarotdeck/thefool.jpeg",
  },
  {
    name: "The Magician",
    description:
      "The card suggests that your trades have the potential to yield successful results. The Magician represents power, skill, and manifestation of goals. It signifies that you have the necessary tools and abilities to make your investments profitable. This card encourages you to utilize your intellect, creativity, and resourcefulness to your advantage.\n\nBy harnessing your potential and making strategic decisions, you can manifest positive outcomes in your crypto trades. However, it's important to remember that the ultimate result will depend on your actions, choices, and market conditions. The Magician card indicates that you have the ability to influence and shape the outcome of your trades through your knowledge and skills.",
    image: "/tarotdeck/themagician.jpeg",
  },
  {
    name: "The High Priestess",
    description:
      "According to The High Priestess tarot card, your trades have the potential to yield mysterious and intuitive results. Trust your instincts, tap into hidden knowledge, and explore alternative perspectives to make informed decisions. The card suggests that unseen factors may influence your investments, and embracing your intuition can lead to profitable outcomes.\n\nHowever, remember that the High Priestess card doesn't guarantee specific results; success depends on your ability to navigate the market's mysteries using a blend of rational analysis and intuitive insights.",
    image: "/tarotdeck/thehighpriestess.jpeg",
  },
  {
    name: "The Empress",
    description:
      "According to The Empress tarot card, your trades have the potential to yield abundant and fruitful results. The Empress represents growth, nurturing, and prosperity. This card suggests that your investments may bring about positive outcomes and financial abundance. \n\nTo maximize your chances of success, it advises you to adopt a nurturing mindset and approach your trades with patience and care. Trust your in stincts and tap into your creativity when making decisions in the crypto market. By finding a harmonious balance between intuition and practicality, you can create favorable conditions for your investments to flourish.\n\nHowever, it's important to note that the Empress card does not guarantee specific outcomes. The actual results will depend on your actions, strategies, and the overall market conditions. Nevertheless, by embracing a nurturing mindset and making informed choices, you increase the likelihood of achieving prosperous results in your trading endeavors.",
    image: "/tarotdeck/theempress.jpeg",
  },
  {
    name: "The Emperor",
    description:
      "The Emperor tarot card represents authority, structure, and stability. It symbolizes a time of taking control and establishing a solid foundation for your trades. This card suggests that your investments have the potential to yield positive results through a disciplined and structured approach. It encourages you to exercise leadership and make well-informed decisions based on careful analysis and strategic planning.\n\nBy setting clear boundaries and maintaining a sense of control, you can create a stable framework for success in your trades. However, it is important to remain adaptable to market conditions and make adjustments as necessary to ensure continued growth and prosperity.",
    image: "/tarotdeck/theemperor.jpeg",
  },
  {
    name: "The Hierophant",
    description:
      "According to The Hierophant tarot card, your trades have the potential to yield structured and traditional results. The Hierophant represents conformity, tradition, and established systems. This card suggests that your investments may benefit from following established guidelines and adopting a conservative approach.\n\nTo increase the likelihood of success, it advises seeking guidance from experienced individuals or experts in the crypto market. The Hierophant encourages adhering to established strategies, rules, and regulations when making trading decisions. By aligning yourself with trusted sources of knowledge and respecting traditional trading methods, you can navigate the market more effectively.\n\n However, it's important to note that the Hierophant card does not guarantee specific outcomes. The actual results will depend on your ability to apply traditional principles while considering market dynamics and adapting when necessary. By maintaining a balance between tradition and flexibility, seeking expert advice, and making informed decisions, you can enhance the potential for successful results in your trades.",
    image: "/tarotdeck/thehierophant.jpeg",
  },
  {
    name: "The Lovers",
    description:
      "According to 'The Lovers' tarot card, your trades have the potential to yield harmonious and positive results. The Lovers represent partnership, alignment, and choices based on personal values. This card suggests that your investments may thrive when you make decisions that resonate with your beliefs and values. It encourages you to consider both financial and emotional aspects of your trades, seek harmony, and make choices that align with your true desires.\n\nCollaboration and finding common ground with others in the crypto market may contribute to favorable outcomes. Trust your instincts, stay true to yourself, and make informed decisions to increase the likelihood of achieving positive results. However, it's important to note that the Lovers card does not guarantee specific outcomes. The actual results will depend on your ability to make decisions in alignment with your values and navigate the market with integrity.",
    image: "/tarotdeck/TheLovers.jpg",
  },
  {
    name: "The Chariot",
    description:
      "According to 'The Chariot' tarot card, your trades have the potential to yield victory and success. The Chariot represents determination, willpower, and assertiveness. It suggests that through focused and disciplined efforts, you can overcome challenges and obstacles in the crypto market. By setting clear goals, devising strategic plans, and executing them confidently, you increase your chances of achieving triumphant outcomes.\n\nHowever, it's important to note that the Chariot card does not guarantee specific results. Your ultimate success will depend on your ability to maintain focus, adapt to changing circumstances, and make informed decisions. Approach your trades with determination, discipline, and adaptability to enhance the potential for positive results.",
    image: "/tarotdeck/thechariot.jpeg",
  },
  {
    name: "Strength",
    description:
      "According to 'Strength' tarot card, your trades have the potential to yield strength and resilience. The Strength card represents courage, inner power, and the ability to overcome challenges. It suggests that by harnessing your inner strength and staying focused, you can navigate the crypto market with confidence and determination. This card advises you to trust your abilities, remain calm in turbulent times, and persistently pursue your investment goals.\n\nHowever, it's important to remember that the Strength card does not guarantee specific outcomes. Your ultimate success will depend on your ability to stay strong, make informed decisions, and adapt to market conditions. Approach your trades with confidence, trust in your abilities, and remain resilient to enhance the potential for positive results.",
    image: "/tarotdeck/thestrength.jpeg",
  },
  {
    name: "The Hermit",
    description:
      "according to 'The Hermit' tarot card, your trades may yield introspection and solitude. The Hermit represents wisdom, self-reflection, and seeking inner guidance. This card suggests that your investments may benefit from taking a step back, reflecting on your strategies, and seeking a deeper understanding of the crypto market.\n\nIt advises prioritizing self-analysis and introspection in your trading decisions. The Hermit encourages you to seek solitude to refine your strategies and make well-informed choices. By trusting your inner wisdom and taking a cautious approach, you can navigate the market more effectively.\n\nHowever, it's important to note that the Hermit card does not guarantee specific results. The actual outcomes will depend on your ability to embrace introspection, integrate your learnings, and make informed decisions. Approach your trades with wisdom, take time for reflection, and make thoughtful choices to increase the likelihood of favorable results.",
    image: "/tarotdeck/thehermit.jpeg",
  },
  {
    name: "Wheel of Fortune",
    description:
      "According to 'Wheel of Fortune' tarot card, your trades may yield unpredictable results. The Wheel of Fortune represents cycles and changes in life, indicating that your investments may be subject to the ups and downs of the crypto market. This card advises you to embrace both opportunities and challenges that come your way, as luck and circumstances play a role in your trading outcomes. It suggests being adaptable and open to new possibilities.\n\nKeep in mind that external factors can influence your trades, so staying informed and making flexible decisions is crucial. However, it's important to note that the Wheel of Fortune card does not guarantee specific results. The actual outcomes will depend on various factors and your ability to navigate the changes effectively.",
    image: "/tarotdeck/wheeloffortune.jpeg",
  },
  {
    name: "Justice",
    description:
      "According to the 'Justice' tarot card, your trades may yield fair and balanced results. The Justice card represents fairness, truth, and accountability. It suggests that your investments will be influenced by the principle of cause and effect.\n\nTo increase your chances of success, the card advises making decisions based on careful analysis and objective reasoning, while considering ethical and legal aspects. By acting with integrity and fairness in your trading, you create the conditions for just outcomes.\n\nHowever, it's important to note that the Justice card does not guarantee specific results. The actual outcomes will depend on your ability to make informed decisions, consider multiple perspectives, and adapt to the market's fairness and fluctuations.\n\nApproach your trades with integrity, seek fair dealings, and make informed choices to increase the likelihood of achieving favorable and balanced results.",
    image: "/tarotdeck/justice.jpeg",
  },
  {
    name: "The Hanged Man",
    description:
      "According to 'The Hanged Man' tarot card, your trades may yield a period of suspension, sacrifice, and gaining a new perspective. The Hanged Man represents a time of pause and surrender, encouraging you to let go of old strategies or beliefs that may no longer serve you. By embracing this period of suspension and adopting an open mind, you can gain valuable insights and potentially achieve successful outcomes in your investments.\n\nHowever, it's important to note that the Hanged Man card does not guarantee specific results. The actual outcomes will depend on your ability to embrace the period of suspension, surrender to new perspectives, and make informed decisions as you navigate the crypto market. Approach your trades with patience, adaptability, and a willingness to let go of control to increase the likelihood of positive results.",
    image: "/tarotdeck/thehangedman.jpeg",
  },
  {
    name: "Death",
    description:
      "According to the 'Death' tarot card, your trades may yield transformation, endings, and new beginnings. The Death card represents significant change and letting go of the old. It advises releasing attachments to outdated strategies or investments that no longer serve you. Embracing change and being adaptable can lead to positive outcomes in the long run.\n\nThe card suggests the potential for rebirth and renewal, signaling the need to let go of certain investments or approaches to make room for new opportunities. However, it's important to note that the Death card does not guarantee specific results. Your success will depend on your ability to embrace change, let go of the old, and make informed decisions as you navigate the crypto market. Approach your trades with an open mind and embrace transformation to increase the likelihood of positive results and new beginnings.",
    image: "/tarotdeck/death.jpeg",
  },
  {
    name: "Temperance",
    description:
      "According to the `Temperance` tarot card, your trades may yield balance, moderation, and harmony. The Temperance card represents finding the middle path and blending different elements together. It advises seeking a balanced approach, practicing moderation, and adapting to market conditions. By finding equilibrium between risk and caution, intuition and analysis, you increase the likelihood of positive outcomes. The card suggests that patient and steady trading, along with a harmonious mindset, can lead to favorable results. \n\nHowever, it's important to note that the Temperance card does not guarantee specific results. Your success will depend on your ability to find balance, exercise moderation, and make informed decisions. Approach your trades with a calm and balanced mindset, seek equilibrium in your strategies, and make choices that reflect a harmonious approach to increase the likelihood of favorable results.",
    image: "/tarotdeck/temperance.jpeg",
  },
  {
    name: "The Devil",
    description:
      "According to `The Devil` tarot card, your trades may yield entrapment, illusions, and negative outcomes. The Devil represents temptation, materialism, and being bound by unhealthy patterns or dependencies. This card suggests that your investments may be influenced by greed, impulsive decision-making, or falling into harmful practices.\n\nIt warns against making choices based solely on immediate gratification or following the herd mentality. The Devil card signifies the need to break free from limiting beliefs and take responsibility for your actions in the crypto market. By recognizing and releasing unhealthy attachments, you can avoid negative consequences and work towards more positive outcomes.\n\nHowever, it's important to note that the Devil card does not dictate a fixed result. Your ultimate outcome will depend on your ability to resist temptation, make informed decisions, and break free from harmful patterns. Approach your trades with caution, practice self-discipline, and seek clarity to increase the likelihood of achieving more favorable results.",
    image: "/tarotdeck/thedevil.jpeg",
  },
  {
    name: "The Tower",
    description:
      "According to `The Tower` tarot card, your trades may yield unexpected and disruptive results. The Tower represents sudden change, upheaval, and the breaking down of existing structures. It signifies a period of turmoil and transformation in your investment journey.\n\nThis card advises you to be prepared for unforeseen events that may shake the foundations of your trades. It signifies the need to adapt quickly to unexpected circumstances and make necessary adjustments. While the Tower represents a challenging period, it also presents an opportunity for growth and rebuilding.\n\nThe ultimate outcome will depend on your ability to navigate the upheaval and embrace change. It's important to remain resilient, seek opportunities amidst chaos, and make informed decisions in response to the new circumstances. Approach your trades with flexibility and adaptability to increase the likelihood of positive outcomes even in the face of disruption.",
    image: "/tarotdeck/thetower.jpeg",
  },
  {
    name: "The Star",
    description:
      "According to `The Star` tarot card, your trades may yield hope, inspiration, and positive outcomes. The Star represents a guiding light, offering a sense of optimism and renewal. It signifies that your investments have the potential to bring about positive changes and fulfill your aspirations.\n\nThis card advises you to stay focused on your goals and have faith in your abilities. It encourages you to trust the process and remain optimistic, even during challenging times. The Star suggests that by maintaining a positive mindset, being open to new possibilities, and aligning your actions with your aspirations, you can attract favorable results in your crypto trades. It symbolizes a sense of divine guidance and offers reassurance that your efforts will be rewarded.\n\nHowever, it's important to note that the Star card does not guarantee specific outcomes. The actual results will depend on your actions, market conditions, and your ability to stay committed to your goals. Embrace the hope and inspiration offered by the Star, stay aligned with your vision, and make informed decisions to increase the likelihood of positive and fulfilling results in your crypto trades.",
    image: "/tarotdeck/thestar.jpeg",
  },
  {
    name: "The Moon",
    description:
      "According to `The Moon` tarot card, your trades may yield results that are influenced by intuition, emotions, and the subconscious. The Moon represents the realm of the unknown, illusions, and hidden influences. It suggests that your investments may be subject to fluctuations and uncertainties in the crypto market. It advises you to trust your instincts and tap into your intuition when making trading decisions.\n\nHowever, be cautious of deceptive or misleading information and seek clarity through thorough research and analysis. The Moon reminds you to navigate the market with awareness, adaptability, and a balanced approach to emotions. While the outcomes may be unpredictable, by staying connected to your intuition and being mindful of the hidden aspects, you can make more informed choices to increase the likelihood of favorable results in your trades.",
    image: "/tarotdeck/themoon.jpeg",
  },
  {
    name: "The Sun",
    description:
      "According to `The Sun` tarot card, your trades are likely to yield success, positivity, and abundance. The Sun represents joy, vitality, and favorable outcomes. It signifies a period of growth and flourishing in your investments.\n\nThis card advises you to have confidence in your abilities and embrace a positive mindset. It suggests that your investments have the potential to bring you happiness and financial rewards. The Sun card encourages you to seize opportunities, bask in the spotlight, and let your investments shine brightly.\n\nOverall, `The Sun` tarot card indicates that your trades are likely to yield optimistic and prosperous results. Embrace positivity, trust your instincts, and make informed decisions to enhance the potential for successful outcomes in the crypto market.",
    image: "/tarotdeck/thesun.jpeg",
  },
  {
    name: "Judgement",
    description:
      "According to `The Judgement` tarot card, your trades may yield a significant period of evaluation, accountability, and potential rebirth. This card represents a call to reflect on your past choices and actions, and to make decisions based on a higher level of awareness. It signifies that your investments may undergo a period of scrutiny, where past decisions and their consequences will be brought to light.\n\nThis is an opportunity to assess your trading strategies, learn from any mistakes, and make adjustments for a fresh start. The Judgement card suggests that by embracing this period of evaluation and taking responsibility for your actions, you can potentially experience a rebirth and make more informed decisions that lead to positive outcomes in your trades.\n\nHowever, it's important to note that the Judgement card does not guarantee specific results. Your ultimate success will depend on your willingness to honestly assess your past choices, learn from them, and make well-informed decisions moving forward in the crypto market. Approach your trades with a sense of accountability and embrace this opportunity for growth and transformation.",
    image: "/tarotdeck/judgement.jpeg",
  },
  {
    name: "The World",
    description:
      "According to `The World` tarot card, your trades are likely to yield successful and fulfilling results. The World represents completion, achievement, and wholeness. It signifies that your investments have the potential to reach a state of fulfillment and accomplishment. This card suggests that you have come full circle in your trading journey, and you are on the verge of experiencing positive outcomes and rewards. It signifies a sense of unity and integration, indicating that your trades may align with your overall goals and aspirations.\n\nThe World card encourages you to celebrate your achievements and embrace the opportunities that lie ahead. It represents a culmination of your efforts and suggests that your investments have the potential to make a significant impact in the crypto market. However, it's important to continue to stay grounded, adapt to changes, and maintain a balanced approach to sustain your success in the long term.",
    image: "/tarotdeck/theworld.jpeg",
  },
  {
    name: "Ace of Cups",
    description:
      "The `Ace of Cups` tarot card suggests that your trades may yield new opportunities and emotional fulfillment. This card represents the potential for new beginnings, abundance, and positive energy. It advises you to approach your investments with an open heart, allowing your intuition and emotions to guide you. The Ace of Cups signifies the potential for joy, fulfillment, and financial rewards in your trades.\n\nHowever, it's important to remember that the card does not guarantee specific results. The actual outcomes will depend on your ability to embrace new opportunities, listen to your intuition, and make informed decisions. Approach your trades with an open heart and align them with your highest values to increase the likelihood of positive and fulfilling results.",
    image: "/tarotdeck/aceofcups.jpeg",
  },
  {
    name: "Two of Cups",
    description:
      "According to the `Two of Cups` tarot card, your trades may yield positive and harmonious results. The Two of Cups represents partnerships, connections, and mutual benefits. It suggests that collaborating with others and seeking shared goals can enhance your chances of success in trading. By fostering open communication, trust, and emotional connections, you can create a sense of harmony and balance in your investments.\n\n However, it's important to note that the Two of Cups card does not guarantee specific results. The actual outcomes will depend on your ability to cultivate strong partnerships, communicate effectively, and make informed decisions. Approach your trades with a collaborative mindset, seek mutually beneficial arrangements, and nurture healthy relationships to increase the likelihood of favorable results.",
    image: "/tarotdeck/twoofcups.jpeg",
  },
  {
    name: "Three of Cups",
    description:
      "The `Three of Cups` tarot card suggests that your trades may yield positive and joyful results. This card represents celebration, friendship, and abundance. It indicates that your investments have the potential to bring about a sense of harmony, shared success, and fulfillment.\n\nThe card advises you to cultivate connections and collaborate with others in your trading endeavors. By working together and celebrating achievements, you can enhance your trading outcomes and create a supportive network.\n\nHowever, it's important to remember that the Three of Cups card does not guarantee specific results. The actual outcomes will depend on your ability to foster relationships, collaborate effectively, and make informed decisions in the crypto market.",
    image: "/tarotdeck/threeofcups.jpeg",
  },
  {
    name: "Four of Cups",
    description:
      "the `Four of Cups` tarot card, it suggests that your trades may yield a sense of contemplation and introspection. The Four of Cups represents a period of reflection, where you may find yourself feeling dissatisfied or uninterested with the current investment opportunities presented to you. It indicates a need to reassess your priorities and consider whether there are better options available.\n\n This card advises you to look beyond what is immediately in front of you and remain open to new possibilities. It urges you to examine your emotional state and desires in relation to your investments. It may be a time to take a step back, reevaluate your strategies, and consider whether there are alternative opportunities that align better with your goals.",
    image: "/tarotdeck/fourofcups.jpeg",
  },
  {
    name: "Five of Cups",
    description:
      " The `Five of Cups` tarot card suggests that your trades may yield feelings of disappointment or loss. The Five of Cups represents a period of emotional upheaval and focusing on past failures or missed opportunities. It signifies that there may be setbacks or challenges in your investments, leading to a sense of regret or disillusionment. \n\nHowever, it's important to note that the Five of Cups also carries a message of learning and resilience. While there may be disappointment, it encourages you to acknowledge and process those emotions, but not dwell on them. It advises you to shift your focus from what went wrong to what can still be salvaged or learned from the situation.",
    image: "/tarotdeck/fiveofcups.jpeg",
  },
  {
    name: "Six of Cups",
    description:
      "The `Six of Cups` tarot card suggest, that your trades may bring about a sense of nostalgia and past influences. The card suggests that your trades could be influenced by past experiences, memories, or connections. It could indicate a potential for revisiting familiar strategies or seeking opportunities rooted in the past. \n\nHowever, it's important to note that the prediction is based on symbolic interpretation and not an absolute guarantee of specific outcomes. The actual results will depend on various factors, including market conditions and your trading decisions.",
    image: "/tarotdeck/sixofcups.jpeg",
  },
  {
    name: "Seven of Cups",
    description:
      "The `Seven of Cups` tarot card suggest, that the trader may face a period of confusion and overwhelming choices in their trades. The Seven of Cups represents a multitude of options and possibilities, but it also warns of the need for clarity and discernment.\n\n It suggests that the trader should be cautious and avoid getting lost in unrealistic or deceptive opportunities. It's important for the trader to carefully evaluate each option, stay focused on their goals, and make informed decisions to navigate through the complexity and make the most of their trading endeavors.",
    image: "/tarotdeck/sevenofcups.jpeg",
  },
  {
    name: "Eight of Cups",
    description:
      "The `Eight of Cups` tarot card suggest, that your trades may involve leaving behind certain investments or ventures. The Eight of Cups represents a period of transition and the need for emotional detachment from current circumstances. It implies that you may feel compelled to move on from certain trades or investment strategies in search of something more fulfilling or aligned with your goals.\n\nThe card advises you to trust your instincts and listen to your inner voice. It signifies that it might be necessary to let go of certain opportunities or investments that no longer serve you in order to pursue new paths and experiences.\n\nOverall, the prediction with the `Eight of Cups` card suggests a time of change and the need to explore new possibilities in your trading journey. It indicates that by leaving behind what no longer serves you, you can find greater fulfillment and growth in your future trades.",
    image: "/tarotdeck/eightofcups.jpeg",
  },
  {
    name: "Nine of Cups",
    description:
      "The `Nine Of Cups` tarot card suggests , that your trades have the potential to bring you fulfillment, satisfaction, and a sense of abundance. This card represents wishes fulfilled, emotional satisfaction, and overall positive outcomes. It suggests that your investments may lead to favorable results, bringing you joy and contentment.",
    image: "/tarotdeck/nineofcups.jpeg",
  },
  {
    name: "Ten of Cups",
    description:
      "The `Ten of Cups` tarot card suggests , that your trades would be positive and fruitful. The Ten of Cups represents emotional fulfillment, harmony, and joy. It suggests that your investments have the potential to bring about a sense of contentment and satisfaction. This card indicates that your trades may lead to successful outcomes, not just in terms of financial gains, but also in terms of overall happiness and fulfillment.",
    image: "/tarotdeck/tenofcups.jpeg",
  },
  {
    name: "Page of Cups",
    description:
      "The `Page of Cups` tarot card suggests that your trades may bring opportunities for emotional growth and new beginnings. The Page of Cups represents youthful enthusiasm, creativity, and the emergence of new ideas. It suggests that by approaching your trades with an open heart and a willingness to explore innovative strategies, you can potentially uncover profitable ventures or untapped potential in the crypto market.\n\nThis card encourages you to embrace your intuition, nurture your passions, and be open to unexpected opportunities that may arise. However, keep in mind that the Page of Cups card does not guarantee specific results, but rather signifies a potential for positive emotional and creative development in your trading journey.",
    image: "/tarotdeck/pageofcups.jpeg",
  },
  {
    name: "Knight of Cups",
    description:
      "The `Knight of Cups` tarot card suggests that your trades may be guided by your emotional instincts, and there is potential for positive outcomes if you follow your heart and make decisions based on your intuition. It suggests that by combining your emotions with practicality and a balanced approach, you can navigate the crypto market successfully.\n\nHowever, it's important to note that the Knight of Cups card does not guarantee specific results. The actual outcomes will depend on your ability to harness your emotions effectively, make informed decisions, and maintain a level-headed approach in the face of market volatility.",
    image: "/tarotdeck/knightofcups.jpeg",
  },
  {
    name: "Queen of Cups",
    description:
      "The `Queen of Cups` card suggests that your investments may yield emotional fulfillment and intuitive success. The Queen of Cups represents emotional intelligence, compassion, and intuitive wisdom.\n\n It suggests that by tapping into your intuition, understanding your emotions, and making decisions from a place of empathy and compassion, you can navigate the crypto market with positive outcomes. Trust your instincts, remain emotionally balanced, and cultivate a deep understanding of the market to increase the likelihood of favorable results.",
    image: "/tarotdeck/queenofcups.jpeg",
  },
  {
    name: "King of Cups",
    description:
      "The `King of Cups` suggests that your trades may result in emotional balance, intuitive decision-making, and potential financial success. The King of Cups represents emotional intelligence, stability, and a calm approach to your investments. It indicates that by tapping into your intuition and maintaining a balanced mindset, you have the potential to make wise decisions and achieve positive outcomes in the crypto market.",
    image: "/tarotdeck/kingofcups.jpeg",
  },
  {
    name: "Ace of Pentacles",
    description:
      "The `Ace of Pentacles` suggests that your trades have the potential to yield new financial opportunities and material abundance. The Ace of Pentacles represents the beginning of prosperity and the manifestation of wealth. It suggests that your investments may lead to favorable outcomes, such as financial stability and growth. This card encourages you to seize these opportunities and make practical and grounded decisions in your trading activities.\n\n However, it's important to note that the card doesn't guarantee specific results, and the actual outcome will depend on various factors such as market conditions and your own actions. Approach your trades with a focused mindset, take advantage of the potential opportunities, and make informed choices to increase the likelihood of positive results.",
    image: "/tarotdeck/aceofpentacles.jpeg",
  },
  {
    name: "Two of Pentacles",
    description:
      "The `Two of Pentacles` card suggests that your trades may involve balancing multiple financial responsibilities and finding harmony amidst changing circumstances. This card suggests that you will need to juggle different aspects of your investments, adapt to market fluctuations, and make practical decisions to maintain stability. The prediction implies that your ability to find balance and manage your resources wisely will be key to navigating the crypto market successfully.",
    image: "/tarotdeck/twoofpentacles.jpeg",
  },
  {
    name: "Three of Pentacles",
    description:
      "The `Three of pentacles` suggests that your trades would be positive. The Three of Pentacles represents collaboration, skill, and success in your endeavors. It suggests that your trades have the potential to be fruitful, especially if you are willing to work with others and utilize your expertise.\n\n This card signifies the importance of teamwork, attention to detail, and honing your craft. It indicates that your efforts may be recognized, leading to rewards and progress in your trading journey. Overall, the tarot reader's prediction would be that your trades have the potential for success and prosperity.",
    image: "/tarotdeck/threeofpentacles.jpeg",
  },
  {
    name: "Four of Pentacles",
    description:
      "The `Four of Pentacles` represents a tendency to hold onto resources and maintain a secure financial position. It implies that you may be inclined to be cautious and reluctant to take risks in your trading activities. The card advises you to prioritize stability, financial security, and the preservation of your assets.\n\n However, it also indicates a potential need to find a balance between holding onto what you have and exploring new opportunities for growth. It suggests that while it's important to be mindful of financial stability, being too rigid or overly protective may hinder your potential for greater gains. Therefore, it is recommended to consider finding a balance between preserving your resources and taking calculated risks to maximize your trading outcomes.",
    image: "/tarotdeck/fourofpentacles.jpeg",
  },
  {
    name: "Five of Pentacles",
    description:
      "The `Five of Pentacles` card suggest that your trades, the prediction would suggest potential financial challenges or difficulties. The Five of Pentacles represents a period of financial strain, scarcity, or feeling left out in the cold. It indicates that there may be losses or setbacks in your investments, and you might experience a sense of financial instability. \n\nHowever, it's important to note that the Tarot is not an absolute predictor of the future, and outcomes can be influenced by various factors. While the Five of Pentacles card suggests potential financial challenges, it is still within your power to take proactive steps, seek guidance, and adapt your strategies to improve the situation.",
    image: "/tarotdeck/fiveofpentacles.jpeg",
  },
  {
    name: "Six of Pentacles",
    description:
      "The `Six of Pentacles` card suggests that your trades may experience a fair and balanced exchange. The Six of Pentacles represents generosity, reciprocity, and the flow of resources. It suggests that your trades have the potential to result in mutually beneficial outcomes, where you may receive support or assistance from others while also sharing your abundance with those in need. \n\nThis card indicates that your investments may lead to a harmonious and equitable distribution of wealth. However, it's important to note that the Six of Pentacles does not guarantee specific results. The actual outcomes will depend on various factors, including your actions, market conditions, and interactions with others. Approach your trades with a spirit of fairness, generosity, and integrity to increase the likelihood of positive and mutually beneficial results.",
    image: "/tarotdeck/sixofpentacles.jpeg",
  },
  {
    name: "Seven of Pentacles",
    description:
      "The `Seven of Pentacles` card suggests that your trades would likely suggest a period of evaluation and patience. The Seven of Pentacles represents a time of reflection, assessing your investments, and waiting for the results to unfold. It indicates that your trades may require a patient approach, allowing your investments to grow and develop over time.\n\n The card advises you to review your progress, make necessary adjustments, and trust in the process of your investments. While it doesn't provide specific outcomes, it suggests that with careful assessment and patience, your trades have the potential to yield positive results in the long run.",
    image: "/tarotdeck/sevenofpentacles.jpeg",
  },
  {
    name: "Eight of Pentacles",
    description:
      "The `Eight of Pentacles` card while you, as a crypto trader, ask about your trades, the prediction would be that your trades will likely result in focused effort, skill development, and potential financial gains. \n\nThe Eight of Pentacles represents dedication, hard work, and honing your expertise. It suggests that by putting in consistent effort, focusing on improving your skills, and staying committed to your trades, you have the potential to achieve success and financial growth in the crypto market.",
    image: "/tarotdeck/eightofpentacles.jpeg",
  },
  {
    name: "Nine of Pentacles",
    description:
      "The `Nine of Pentacles` card suggests that your trades have the potential to yield financial abundance and independent success. The Nine of Pentacles represents a time of prosperity, self-sufficiency, and reaping the rewards of your hard work. It indicates that your investments may result in financial stability and a sense of personal accomplishment.\n\nThis card encourages you to trust in your abilities, maintain a disciplined approach, and enjoy the fruits of your labor. It suggests that your trades may lead to a favorable outcome with the potential for financial growth and security.",
    image: "/tarotdeck/nineofpentacles.jpeg",
  },
  {
    name: "Ten of Pentacles",
    description:
      "The `Ten of Pentacles` card suggests that your trades have the potential to bring substantial financial stability and long-term wealth. The Ten of Pentacles represents a culmination of material abundance, prosperity, and generational wealth. It suggests that your investments may yield significant returns and contribute to a solid financial foundation for yourself and possibly future generations. This card indicates that your trades have the potential to create a lasting and prosperous outcome, bringing you financial security and success in the crypto market.",
    image: "/tarotdeck/tenofpentacles.jpeg",
  },
  {
    name: "Page of Pentacles",
    description:
      "The `Page of Pentacles` card suggest that your trades as a crypto trader would be that there is potential for new financial opportunities and growth. The Page of Pentacles represents a young and ambitious individual who is eager to learn and apply their skills in practical ways.\n\n It suggests that by being diligent, focused, and open to learning, your trades have the potential to yield positive results, such as new investment prospects or profitable ventures. The card encourages you to approach your trades with a beginner's mindset, seeking knowledge and being willing to put in the necessary effort to achieve your financial goals.",
    image: "/tarotdeck/pageofpentacles.jpeg",
  },
  {
    name: "Knight of Pentacles",
    description:
      "The `Knight of Pentacles` card suggests that with your trades you can expect steady and reliable progress. The Knight of Pentacles represents a methodical and disciplined approach, suggesting that your investments will yield gradual growth and stability. This card indicates that by focusing on long-term strategies, being diligent in your research, and taking a patient and practical approach, you have the potential to achieve financial stability and tangible results in your trades.",
    image: "/tarotdeck/knightofpentacles.jpeg",
  },
  {
    name: "Queen of Pentacles",
    description:
      "The `Queen of Pentacles` card suggest that your investments will likely bring stability, abundance, and financial success. The Queen of Pentacles represents a person or energy associated with practicality, nurturing, and material wealth. It suggests that your trading endeavors have the potential to generate positive outcomes, growth, and a strong foundation for your financial goals. It indicates that you may experience fruitful returns and a sense of security in your investment ventures.",
    image: "/tarotdeck/queenofpentacles.jpeg",
  },
  {
    name: "King of Pentacles",
    description:
      "The `King of Pentacles` card suggests that your trades are likely to yield success, financial stability, and abundance. The `King of Pentacles` represents wealth, mastery, and practicality. It signifies that your investments have the potential to bring fruitful results and solid returns. This card suggests that you have the skills, knowledge, and expertise to make wise financial decisions in the crypto market. It advises you to approach your trades with a practical mindset, focus on long-term gains, and utilize your resources effectively. Overall, the prediction is that your trades have a high probability of leading to prosperous outcomes.",
    image: "/tarotdeck/kingofpentacles.jpeg",
  },
  {
    name: "Ace of Swords",
    description:
      "The `Ace of Swords` card suggests that your trades have the potential to yield success, clarity, and breakthroughs. The Ace of Swords represents a new beginning, intellectual power, and the ability to make decisive and strategic decisions. It indicates that your trading activities may be marked by sharp insight, clear thinking, and a strong sense of purpose.\n\n This card signifies that you have the mental acuity and determination to overcome challenges and achieve your goals in the crypto market. It advises you to harness your intellectual prowess, embrace new opportunities, and take calculated risks to optimize your results. However, it's important to remember that tarot readings are interpretive, and the actual outcomes of your trades will depend on various factors and your own actions in the market.",
    image: "/tarotdeck/aceofswords.jpeg",
  },
  {
    name: "Two of Swords",
    description:
      "The Two of Swords represents a situation where you may feel stuck, unable to move forward or make clear decisions. It suggests a period of uncertainty and conflicting options.\n\nThis card suggests that you are currently facing a dilemma in your trading decisions. It could be related to conflicting information, market volatility, or uncertainty about which path to take. The card advises you to carefully weigh your options, gather more information, and find a way to reconcile opposing factors before making any major trading decisions.\n\nHowever, it's important to note that the `Two of Swords` card does not provide a definitive outcome. The actual result of your trades will depend on your ability to confront the decision at hand, seek clarity, and make informed choices. The Tarot reader's prediction serves as a reminder to address the challenges and seek a resolution to move forward in your trading journey.",
    image: "/tarotdeck/twoofswords.jpeg",
  },
  {
    name: "Three of Swords",
    description:
      "The `Three of Swords` card suggests that in your trades this would be a period of heartache, pain, or difficulties. This card suggests that your investments may face challenges or setbacks that could potentially result in emotional turmoil or loss. It advises you to be prepared for difficult circumstances and to approach your trades with caution and careful consideration.\n\n However, it's important to remember that tarot readings are subjective and should be taken as guidance rather than a definitive prediction of the future. It's always wise to make decisions based on your own research, analysis, and risk assessment in the crypto market.",
    image: "/tarotdeck/threeofswords.jpeg",
  },
  {
    name: "Four of Swords",
    description:
      "The `Four of Swords` card suggests this would be a period of rest, recuperation, and taking a break from active trading. It indicates that the best course of action at this time might be to step back and allow yourself some time for introspection and recharging.\n\n The card suggests that pushing forward with trades may not yield the desired results, and instead, it advises you to focus on self-care and regaining a sense of balance before resuming your trading activities.",
    image: "/tarotdeck/fourofswords.jpeg",
  },
  {
    name: "Five of Swords",
    description:
      "The `Five of Swords` card suggests potential conflict, competition, or challenges in your trades. The card indicates that you may encounter situations where you need to be cautious of deceit, manipulation, or unhealthy competition within the crypto market. It advises you to be strategic, maintain a sense of integrity, and carefully assess your decisions to navigate these challenging circumstances.",
    image: "/tarotdeck/fiveofswords.jpeg",
  },
  {
    name: "Six of Swords",
    description:
      "The `Six of Swords` card suggests that your trades will bring about a period of transition, moving away from difficulties towards calmer waters. The card suggests that by making strategic decisions and leaving behind challenging situations, you can navigate towards a more stable and positive trading experience. This indicates a potential improvement in your trading journey, where you may find smoother sailing and a sense of relief from previous obstacles.",
    image: "/tarotdeck/sixofswords.jpeg",
  },
  {
    name: "Seven of Swords",
    description:
      "The `Seven of Swords` suggests that your trades may involve an element of deception, risk, or potential loss. The card suggests a need for caution and vigilance, as there could be hidden agendas, unethical practices, or potential theft in the trading environment. It advises you to be mindful of your actions, conduct thorough research, and take appropriate measures to protect your assets and interests. The Seven of Swords serves as a reminder to be skeptical of overly promising or questionable opportunities and to maintain a keen awareness of potential risks in your trading endeavors.",
    image: "/tarotdeck/sevenofswords.jpeg",
  },
  {
    name: "Eight of Swords",
    description:
      "The `Eight of Swords` card suggest that your trades may experience a sense of feeling restricted or trapped in your investment endeavors. It signifies potential obstacles, limitations, or self-imposed restrictions that could hinder your progress or decision-making process.\n\nThis card advises you to examine any self-limiting beliefs or fears that may be holding you back. It urges you to challenge these constraints and seek ways to break free from the perceived limitations. By taking a proactive approach, seeking alternative perspectives, and overcoming self-doubt, you can navigate the challenges and find a path towards greater freedom and success in your trades.\n\nIn summary, the presence of the `Eight of Swords` card indicates the potential for feeling trapped or restricted in your trading journey. However, it also encourages you to confront and overcome these limitations by exploring new strategies and gaining a fresh perspective, ultimately leading to a path of greater freedom and success.",
    image: "/tarotdeck/eightofswords.jpeg",
  },
  {
    name: "Nine of Swords",
    description:
      "The `Nine of Swords` card suggests that your investments may lead to feelings of worry, anxiety, or stress. The card serves as a cautionary sign to be mindful of potential challenges or difficulties. However, it's important to remember that tarot readings provide guidance, not fixed outcomes. By remaining calm, seeking support, and making informed choices, you can navigate the challenges and work towards more positive results.",
    image: "/tarotdeck/nineofswords.jpeg",
  },
  {
    name: "Ten of Swords",
    description:
      "The `Ten of Swords` card suggest that your trades may experience significant challenges or setbacks. The Ten of Swords represents a sense of defeat, betrayal, or reaching a low point in a situation. It signifies that your investments may face obstacles or unexpected negative outcomes.\n\nHowever, it's important to remember that Tarot predictions are not absolute and can be influenced by various factors. It's advisable to seek further guidance or explore different strategies to mitigate potential risks and navigate the challenging times in your trading journey.",
    image: "/tarotdeck/tenofswords.jpeg",
  },
  {
    name: "Page of Swords",
    description:
      "The `Page of Swords` card suggest that your trades will require careful analysis, strategic planning, and an alert mindset. You should stay informed about market trends, be proactive in your decision-making, and adapt quickly to changes. By remaining curious, open-minded, and willing to take calculated risks, you can increase your chances of success in the crypto market.",
    image: "/tarotdeck/pageofswords.jpeg",
  },
  {
    name: "Knight of Swords",
    description:
      "The `Knight of Swords` card suggest that your trades may involve a period of rapid action, assertiveness, and taking risks. The Knight of Swords represents an ambitious and driven energy, indicating that you might pursue your trades with determination and a bold approach.\n\nHowever, it's important to exercise caution and ensure that you also consider the potential risks and consequences associated with impulsive decision-making. The card advises you to maintain a balance between swift action and careful consideration to achieve success in your trading endeavors.",
    image: "/tarotdeck/knightofswords.jpeg",
  },
  {
    name: "Queen of Swords",
    description:
      "The `Queen of Swords` card suggest that your trades would need careful analysis, strategy, and maintaining a rational and objective approach. The Queen of Swords represents a sharp intellect, clear communication, and a focus on logic and reason. This card indicates that success in your trades will depend on your ability to make informed decisions based on thorough research and critical thinking.\n\nThe Queen of Swords encourages you to approach your trades with a level-headed mindset, relying on facts and data rather than emotions. By employing your analytical skills and maintaining a disciplined approach, you have the potential to make wise choices and achieve favorable outcomes in your investments.",
    image: "/tarotdeck/queenofswords.jpeg",
  },
  {
    name: "King of Swords",
    description:
      "The `King of Swords` card suggest that your trades would likely be that you will experience a period of strategic decision-making, rationality, and intellectual prowess. The King of Swords represents a strong and analytical mindset, indicating that your trades may be influenced by a logical and calculated approach. It suggests that you have the potential to make informed and decisive choices in your investments, relying on your knowledge and expertise.\n\nThis card also signifies the importance of clear communication and assertiveness in your trading endeavors. In summary, the tarot reader's prediction with the `King of Swords` card suggests that your trades will be driven by logic, strategic thinking, and effective decision-making.",
    image: "/tarotdeck/kingofswords.jpeg",
  },
  {
    name: "Ace of Wands",
    description:
      "The `Ace of Wands` card suggest that your trades have the potential to bring about new opportunities, creativity, and growth. The Ace of Wands represents the spark of inspiration, entrepreneurial spirit, and the initiation of successful ventures. It signifies that your trading activities may lead to exciting prospects, innovative ideas, and the potential for significant returns. It encourages you to take bold and decisive actions, harness your enthusiasm, and seize the opportunities that come your way. This card indicates that your trading journey holds promise and potential for successful outcomes.",
    image: "/tarotdeck/aceofwands.jpeg",
  },
  {
    name: "Two of Wands",
    description:
      "The `Two of Wands` card suggests that your trades would be a potential for future success and expansion. The Two of Wands represents making plans, envisioning opportunities, and taking bold steps towards your goals. It suggests that your trades have the potential to yield positive outcomes, growth, and new possibilities. It advises you to seize opportunities, trust your instincts, and take calculated risks in order to achieve your desired results. However, it's important to note that the actual outcome will depend on your actions, decisions, and market conditions. Embrace the card's message of confidence and forward-thinking as you navigate the crypto market.",
    image: "/tarotdeck/twoofwands.jpeg",
  },
  {
    name: "Three of Wands",
    description:
      "The `Three of Wands` card suggests that your trades have the potential for expansion, growth, and successful outcomes. The Three of Wands signifies taking a proactive approach, having a strategic vision, and being ready to explore new horizons in your investments. It suggests that your trades may lead to opportunities for long-term success, both in terms of financial gains and personal development. However, it's important to note that the actual results will depend on your ability to seize these opportunities, make informed decisions, and adapt to the evolving market conditions.",
    image: "/tarotdeck/threeofwands.jpeg",
  },
  {
    name: "Four of Wands",
    description:
      "The `Four of Wands` card suggests that with your trades you can expect a period of stability, success, and celebration. The Four of Wands represents a time of achievement, harmony, and a solid foundation in your investments. It suggests that your trades have the potential to bring about positive outcomes, financial stability, and a sense of accomplishment. This card indicates that your efforts in the crypto market will likely be rewarded and that you may experience a period of fruitful results. Overall, the prediction is that your trades have the potential to yield favorable and prosperous outcomes.",
    image: "/tarotdeck/fourofwands.jpeg",
  },
  {
    name: "Five of Wands",
    description:
      "The `Five of Wands` card, suggests that your trades may encounter competition, conflicts, or obstacles in your trading journey. The card indicates a period of challenges and disagreements within the market or among fellow traders. However, it's important to remember that the `Five of Wands` card does not guarantee specific outcomes. The actual results will depend on your ability to navigate the competitive landscape, overcome conflicts, and find ways to stand out amidst the challenges. Approach your trades with resilience, strategic thinking, and the willingness to adapt to increase the likelihood of favorable results.",
    image: "/tarotdeck/fiveofwands.jpeg",
  },
  {
    name: "Six of Wands",
    description:
      "The `Six of Wands` card suggests that your trades will be successful and bring you recognition and victory. The Six of Wands symbolizes triumph, achievement, and public recognition for your efforts. It suggests that your trades have the potential to yield positive outcomes and be met with acclaim from others. Overall, the prediction indicates that your investments have a high chance of being successful and bringing you significant rewards.",
    image: "/tarotdeck/sixofwands.jpeg",
  },
  {
    name: "Seven of Wands",
    description:
      "The `Seven of Wands` card suggest that you will face challenges and competition in the crypto market. The card indicates that you will need to defend your position and assert yourself amidst potential obstacles. However, it also implies that with determination, resilience, and strategic decision-making, you have the ability to overcome these challenges and come out on top.",
    image: "/tarotdeck/sevenofwands.jpeg",
  },
  {
    name: "Eight of Wands",
    description:
      "The `Eight of Wands` card, suggests that your trades would be swift and decisive action. The Eight of Wands represents a period of rapid progress, momentum, and opportunities coming your way. It suggests that your trades have the potential for quick movement, possibly resulting in profitable outcomes.\n\nThis card encourages you to seize the moment and act swiftly, as it signifies favorable conditions and an accelerated pace in the crypto market. However, it's important to note that the interpretation of tarot cards is subjective, and the actual outcomes of your trades will depend on various factors. Approach your trades with attentiveness, make informed decisions, and take advantage of the opportunities that arise to increase the likelihood of positive results.",
    image: "/tarotdeck/eightofwands.jpeg",
  },
  {
    name: "Nine of Wands",
    description:
      "The `Nine of Wands` card suggest that your trades may encounter challenges and obstacles. The Nine of Wands represents resilience, perseverance, and the need to stay vigilant in the face of adversity. It indicates that you may need to protect your investments, be prepared for potential setbacks, and remain determined to overcome any obstacles that come your way. \n\nDespite the challenges, the card encourages you to stay committed to your goals and trust in your ability to navigate through difficulties. By maintaining your resilience and adaptability, you can increase the likelihood of successfully overcoming the hurdles and achieving positive outcomes in your trades.",
    image: "/tarotdeck/nineofwands.jpeg",
  },
  {
    name: "Ten of Wands",
    description:
      "The `Ten of Wands` card suggest that your trades may result in a heavy burden or overwhelming workload. It indicates that you might encounter challenges and responsibilities that could become exhausting and take a toll on your well-being. The card advises you to be mindful of taking on too much and to find ways to manage the stress that may arise from your trading activities. By maintaining a balanced approach and seeking support when needed, you can navigate the demands of trading more effectively.",
    image: "/tarotdeck/tenofwands.jpeg",
  },
  {
    name: "Page of Wands",
    description:
      "The `Page of Wands` card suggest that your trading will likely be in new opportunities where you will have enthusiasm, and potential for growth. The Page of Wands represents a fresh start, creative energy, and the willingness to explore new ventures. It suggests that your trades may bring about exciting prospects and a sense of passion in your investment journey. This card encourages you to embrace the enthusiasm, take calculated risks, and be open to innovative approaches. It signifies that by staying proactive, adaptable, and adventurous in your trading decisions, you may uncover promising avenues for success.",
    image: "/tarotdeck/pageofwands.jpeg",
  },
  {
    name: "Knight of Wands",
    description:
      "The `Knight of Wands` card suggests that your trades will be characterized by passion, energy, and a drive for action. The Knight of Wands signifies a period of taking bold and assertive steps in pursuit of your goals. It suggests that you will likely experience opportunities for growth and expansion in your trading activities. However, it's important to approach your trades with caution and ensure that you maintain a balance between enthusiasm and careful planning. The Knight of Wands encourages you to channel your energy and passion into focused and strategic actions to increase the likelihood of positive outcomes.",
    image: "/tarotdeck/knightofwands.jpeg",
  },
  {
    name: "Queen of Wands",
    description:
      "The `Queen of Wands` card suggests that your trades will likely result in confident and bold outcomes. The Queen of Wands represents a strong and determined individual who takes charge and exudes leadership qualities. It suggests that your investments may yield success through your ability to embrace opportunities, trust your instincts, and take decisive action. This card indicates that you have the potential to make significant strides in the crypto market by being passionate, assertive, and confident in your trading decisions.",
    image: "/tarotdeck/queenofwands.jpeg",
  },
  {
    name: "King of Wands",
    description:
      "The `King of Wands` card suggests that your trades would be one of ambition, energy, and success. The King of Wands represents a dynamic and confident leader who possesses entrepreneurial skills and a visionary mindset. This card suggests that your trades have the potential to be bold and profitable. It signifies that by harnessing your passion, taking decisive action, and leveraging your creativity, you can achieve significant success in your investments.\n\nHowever, it's important to remember that tarot readings are subjective and should be taken as guidance rather than absolute predictions. The actual outcomes will depend on your actions, market conditions, and other factors. Approach your trades with confidence, take calculated risks, and use your visionary skills to increase the likelihood of favorable results.",
    image: "/tarotdeck/kingofwands.jpeg",
  },
];

// Define the '/cards' endpoint to retrieve all cards
router.get("/", (req, res) => {
  res.json(tarotCards);
});

router.get("/onecard", (req, res) => {
  const randomIndex = Math.floor(Math.random() * tarotCards.length);
  const randomCard = tarotCards[randomIndex];
  res.json(randomCard);
});

module.exports = router;
